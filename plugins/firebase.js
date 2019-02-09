import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: $APIKEY,
    authDomain: $AUTHDOMAIN,
    databaseURL: $DATABASEURL,
    projectId: $PROJECTID,
    storageBucket: $STORAGEBUCKET,
    messagingSenderId: $MESSAGESENDERID,
  })
  
}

export default firebase;