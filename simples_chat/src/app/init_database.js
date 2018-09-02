import firebase from 'firebase';

// require('dotenv').config();

// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
//   storageBucket: "",
//   messagingSenderId: process.env.REACT_APP_FIREBASE_API_ID
// };

const config = {
apiKey: "AIzaSyDz8qm4Ulvdbnd_8KiU47EHXTyNHK_Yz2o",
authDomain: "simples-chat.firebaseapp.com",
databaseURL: "https://simples-chat.firebaseio.com",
projectId: "simples-chat",
storageBucket: "simples-chat.appspot.com",
messagingSenderId: "1000527550418"
      };

firebase.initializeApp(config);

const database = firebase.database();

export default database;