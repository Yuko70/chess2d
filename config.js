import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA8kYRcralTqh5Tq-Tq_IBoLnZfFjt8RHg",
  authDomain: "chessdb00.firebaseapp.com",
  databaseURL: "https://chessdb00.firebaseio.com",
  projectId: "chessdb00",
  storageBucket: "chessdb00.appspot.com",
  messagingSenderId: "475892835159",
  appId: "1:475892835159:web:60b49026a3f07c5a"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBAuebg1GyQj_41yh-ktEi5oet_VfzWxG4",
//   authDomain: "chessdb2.firebaseapp.com",
//   databaseURL: "https://chessdb2.firebaseio.com",
//   projectId: "chessdb2",
//   storageBucket: "chessdb2.appspot.com",
//   messagingSenderId: "342386270090",
//   appId: "1:342386270090:web:aca13321ec6631ff"
// };

// Initialize Firebase
if (!firebase.apps.length) {
  const fire = firebase.initializeApp(firebaseConfig)
}

export default fire;