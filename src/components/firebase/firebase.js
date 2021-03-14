import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID

}

class Firebase {
    constructor(){
        firebase.initializeApp(config);
        this.db = firebase.firestore();
        this.auth = firebase.auth();
    }

    createUser=(email, password)=>{
        return(
            this.auth.createUserWithEmailAndPassword(email, password)
            
        )
    }

    signIn=(email, password)=>{
        return(
            this.auth.signInWithEmailAndPassword(email, password)
        )
    }

    signOut=()=> {
        return(
            this.auth.signOut()
        )
    }

    passwordReset=(email)=>{
        return(
            this.auth.sendPasswordResetEmail(email)
        )
    }

    passwordUpdate = (password) => {
        return(
            this.auth.currentUser.updatePassword(password)
        )
    }
}

export default Firebase;