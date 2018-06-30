import VueFire from "vuefire";
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/firestore";
Vue.use(VueFire);
const config = {
  apiKey: "AIzaSyBP8jPc6k5llX2xcj_8QNgZDfnDGDd6_xo",
  authDomain: "ecommerce-91b8f.firebaseapp.com",
  databaseURL: "https://ecommerce-91b8f.firebaseio.com",
  projectId: "ecommerce-91b8f",
  storageBucket: "ecommerce-91b8f.appspot.com",
  messagingSenderId: "594958977262"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase
    .firestore()
    .settings({ timestampsInSnapshots: true });
} else {
  firebase.app();
}
export const db = firebase.firestore();
