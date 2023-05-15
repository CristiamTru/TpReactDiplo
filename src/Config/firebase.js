import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu38g_-192-OxiQd7RxK8xJVhF6YlrFl8",
  authDomain: "react-diplo.firebaseapp.com",
  projectId: "react-diplo",
  storageBucket: "react-diplo.appspot.com",
  messagingSenderId: "1000709157762",
  appId: "1:1000709157762:web:f7d5fb9eb3cc833161d59b"
}; 

firebase.initializeApp(firebaseConfig)

export default firebase 
export const firestore = firebase.firestore();