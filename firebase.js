// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC8bglzJiT-0jqlMB3KNdWbLrESkwMJTZM',
  authDomain: 'testpro-d084e.firebaseapp.com',
  projectId: 'testpro-d084e',
  storageBucket: 'testpro-d084e.appspot.com',
  messagingSenderId: '291128268719',
  appId: '1:291128268719:web:75d06715ec87d9d3d9415a',
  measurementId: 'G-927B4BYV9K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
