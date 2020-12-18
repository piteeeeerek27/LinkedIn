import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDEpODOTx_6mIjDDgZ5KZnbpoea8QzeJdQ',
	authDomain: 'linkedin-clone-479d7.firebaseapp.com',
	projectId: 'linkedin-clone-479d7',
	storageBucket: 'linkedin-clone-479d7.appspot.com',
	messagingSenderId: '255169642709',
	appId: '1:255169642709:web:5f80831200d58076f7a25c',
	measurementId: 'G-182DXV0YL1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
