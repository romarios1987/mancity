import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';


const config = {
  apiKey: "AIzaSyBHG-O5PNyGVDRe-oaAHGvMCTmS7UbTj4I",
  authDomain: "mancity-131e4.firebaseapp.com",
  databaseURL: "https://mancity-131e4.firebaseio.com",
  projectId: "mancity-131e4",
  storageBucket: "mancity-131e4.appspot.com",
  messagingSenderId: "623076967158"
};

firebase.initializeApp(config);

const firebaseDb = firebase.database();

// firebaseDb.ref('matches').once('value').then((snapshot) => {
//     console.log(snapshot.val());
// });

const firebaseMatches = firebaseDb.ref('matches');
const firebasePromotions = firebaseDb.ref('promotions');

export {
  firebase,
  firebaseMatches,
  firebasePromotions
}
