import React from 'react';
import { Link, Route } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import './App.css';

const TopicsList = (props) => (
  <div>
    <h1>TOPICS LIST PAGE</h1>
    <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
  </div>
);

const TopicDetail = (props) => (
  <div>
    <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
