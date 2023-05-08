/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBRKxwCk7raToTtq9Yupsc5AcPpILJhnRU",
  authDomain: "friendlychat-7f8bb.firebaseapp.com",
  projectId: "friendlychat-7f8bb",
  storageBucket: "friendlychat-7f8bb.appspot.com",
  messagingSenderId: "269691928130",
  appId: "1:269691928130:web:1e46d9f3d33aa3e48af7db"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}