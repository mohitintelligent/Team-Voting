import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBgAwhVmWSxvBHl_WBCD0aUizeLk0EYxLQ",
    authDomain: "hotairballoon-74443.firebaseapp.com",
    databaseURL: "https://hotairballoon-74443-default-rtdb.firebaseio.com",
    projectId: "hotairballoon-74443",
    storageBucket: "hotairballoon-74443.appspot.com",
    messagingSenderId: "994078948835",
    appId: "1:994078948835:web:83d3f315f4668ca0d934d6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();