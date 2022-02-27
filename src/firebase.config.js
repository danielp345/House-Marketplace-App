// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB5oeGEkofKhLbT-dLKi2UG3vc8hFhtA4s",
	authDomain: "house-marketplace-app-76f26.firebaseapp.com",
	projectId: "house-marketplace-app-76f26",
	storageBucket: "house-marketplace-app-76f26.appspot.com",
	messagingSenderId: "660832251558",
	appId: "1:660832251558:web:cb046fcb859f903d9bce67",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
