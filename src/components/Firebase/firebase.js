import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCp-l60k4nzoIJu3ohsvDY7P1Nalc_D_e4",
    authDomain: "oddam-w-dobre-rece-b2db5.firebaseapp.com",
    databaseURL: "https://oddam-w-dobre-rece-b2db5.firebaseio.com",
    projectId: "oddam-w-dobre-rece-b2db5",
    storageBucket: "oddam-w-dobre-rece-b2db5.appspot.com",
    messagingSenderId: "856031703879",
    appId: "1:856031703879:web:19e03e6326be1b482d1262"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
}
export default Firebase;