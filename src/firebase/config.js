import firebase from 'firebase/app'
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAAoWOSp9omZwVFsRbqvBj7DxIpLU3WHJ4",
    authDomain: "u-recipes-app.firebaseapp.com",
    projectId: "u-recipes-app",
    storageBucket: "u-recipes-app.appspot.com",
    messagingSenderId: "495003708630",
    appId: "1:495003708630:web:22c2523e39687c1756ad77",
    measurementId: "G-DWWMPJT32Z"
  };

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
export { projectFirestore}
