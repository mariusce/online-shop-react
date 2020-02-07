import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCgsLXnE7Eo9IHElOSk7oCG6OlTKQtQOtU",
    authDomain: "online-shop-react-36dba.firebaseapp.com",
    databaseURL: "https://online-shop-react-36dba.firebaseio.com",
    projectId: "online-shop-react-36dba",
    storageBucket: "online-shop-react-36dba.appspot.com",
    messagingSenderId: "469717606200",
    appId: "1:469717606200:web:191766bdc22c8ec4db6bcd"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;