import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyABNgMtVuNeggjaopw4LyacQZOjO3zGA-w",
    authDomain: "prot-treinazap.firebaseapp.com",
    projectId: "prot-treinazap",
    storageBucket: "prot-treinazap.appspot.com",
    messagingSenderId: "434079694801",
    appId: "1:434079694801:web:613554a0de0bfb4b9c2af0"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
