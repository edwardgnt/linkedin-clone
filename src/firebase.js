import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCaoXLcp4wJvWqjnURIkp0k2iWcco-xQj8",
    authDomain: "linkedin-clone-8ac12.firebaseapp.com",
    projectId: "linkedin-clone-8ac12",
    storageBucket: "linkedin-clone-8ac12.appspot.com",
    messagingSenderId: "36779055155",
    appId: "1:36779055155:web:c2e86a93fbc2f2bd786b46"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };