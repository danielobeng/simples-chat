import firebase from 'firebase';

// require('dotenv').config();

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STRG_BCKT,
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
