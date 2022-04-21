import * as firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCYTJG4TKtQELHgaCixiWdtMgAsvl_zmH4",
  authDomain: "csc40-smart-farm.firebaseapp.com",
  databaseURL: "https://csc40-smart-farm.firebaseio.com",
  projectId: "csc40-smart-farm",
  storageBucket: "csc40-smart-farm.appspot.com",
  messagingSenderId: "266686422763",
  appId: "1:266686422763:web:6e5393ee4c1e0ef13f28ae",
  measurementId: "G-YXRLMC78S7"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const rd = firebase.database();
