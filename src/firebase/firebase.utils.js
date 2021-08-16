import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
	apiKey: 'AIzaSyAhf4aUedJNh0N5Ta7jDzxgfRCYoV7n-w0',
	authDomain: 'crwn-db-6cbba.firebaseapp.com',
	projectId: 'crwn-db-6cbba',
	storageBucket: 'crwn-db-6cbba.appspot.com',
	messagingSenderId: '9072058490',
	appId: '1:9072058490:web:d8a759f2002fc6118fdbc3',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
