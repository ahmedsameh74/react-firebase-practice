import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCDcYGgmjVgGjr_WppPRwcPnDRtcbq8CYY",
    authDomain: "practice-913ab.firebaseapp.com",
    projectId: "practice-913ab",
    storageBucket: "practice-913ab.appspot.com",
    messagingSenderId: "1009777418850",
    appId: "1:1009777418850:web:1b85fd5e7c15db723e673b"
  };

  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projectStorage, timestamp}