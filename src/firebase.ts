import firebase, { initializeApp } from 'firebase/app'
import 'firebase/database'
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyAb8c44rTR3JVLdaVMH3g-6nLmKtbxz3zs",
	authDomain: "pythonlanding.firebaseapp.com",
	projectId: "pythonlanding",
	storageBucket: "pythonlanding.appspot.com",
	messagingSenderId: "327456753039",
	appId: "1:327456753039:web:a01d8ac2cb8eb57120b7fa"
 };

 const app = initializeApp(firebaseConfig)

 const database = getDatabase(app)