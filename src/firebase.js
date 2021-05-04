import firebase from "firebase";
import "firebase/database"; // If using Firebase database
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIOxaI3QKfveyeXCsXXuoZNic7SjmPqG4",
  authDomain: "whatsapp-clone-3c979.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-3c979.firebaseio.com",
  projectId: "whatsapp-clone-3c979",
  storageBucket: "whatsapp-clone-3c979.appspot.com",
  messagingSenderId: "648555374882",
  appId: "1:648555374882:web:52913657f6789ac9555d7b",
  measurementId: "G-D6SFNHRBSL",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
