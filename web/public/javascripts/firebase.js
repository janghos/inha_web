
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBC8M1YTCqC8zrfzftMBZXdQudPTCvD4-g",
authDomain: "inhaweb-7ec64.firebaseapp.com",
databaseURL: "https://inhaweb-7ec64-default-rtdb.firebaseio.com",
projectId: "inhaweb-7ec64",
storageBucket: "inhaweb-7ec64.appspot.com",
messagingSenderId: "264197381913",
appId: "1:264197381913:web:335a4388f493a0a877ef88",
measurementId: "G-J7L605SRTS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
