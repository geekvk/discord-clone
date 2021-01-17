import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvRGmOn-sywou73c0O7EkGBCyIpm1tWUc",
    authDomain: "discord-clone-aecb7.firebaseapp.com",
    projectId: "discord-clone-aecb7",
    storageBucket: "discord-clone-aecb7.appspot.com",
    messagingSenderId: "145871459297",
    appId: "1:145871459297:web:050cec6473bfd985dc78a0",
    measurementId: "G-NREDVFPP71"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  