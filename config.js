import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB3m3K1XYYl553P_M4a2V1FTUNGYyatNpk',
  authDomain: 'student-attendance-1b16b.firebaseapp.com',
  projectId: 'student-attendance-1b16b',
  storageBucket: 'student-attendance-1b16b.appspot.com',
  messagingSenderId: '55801836513',
  appId: '1:55801836513:web:68f33ec22e47dfc16758a0',
  databaseURL: 'https://student-attendance-1b16b-default-rtdb.firebaseio.com/',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
