import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAhf4aUedJNh0N5Ta7jDzxgfRCYoV7n-w0',
	authDomain: 'crwn-db-6cbba.firebaseapp.com',
	projectId: 'crwn-db-6cbba',
	storageBucket: 'crwn-db-6cbba.appspot.com',
	messagingSenderId: '9072058490',
	appId: '1:9072058490:web:d8a759f2002fc6118fdbc3',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
