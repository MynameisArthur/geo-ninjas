import firebase from 'firebase';
import firestore from 'firebase/firestore';
const config = {
    apiKey: 'AIzaSyAc2csOo29dlC3OKuYGQYjjgqHI1BQaI2g',
    authDomain: 'geo-ninjas-190e8.firebaseapp.com',
    databaseURL: 'https://geo-ninjas-190e8.firebaseio.com',
    projectId: 'geo-ninjas-190e8',
    storageBucket: 'geo-ninjas-190e8.appspot.com',
    messagingSenderId: '472784852677',
    appId: '1:472784852677:web:a35b3e7dc92cc50db702ac',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();
