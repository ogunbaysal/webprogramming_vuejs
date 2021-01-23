import firebase from "firebase";
import config from "@/firebase.json";

//initialize firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();
