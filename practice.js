const firebaseConfig = {
    apiKey: "AIzaSyCfllHBLukjPZmlTQOvmgx-4uYB99plKNk",
    authDomain: "practice-654d6.firebaseapp.com",
    databaseURL: "https://practice-654d6-default-rtdb.firebaseio.com",
    projectId: "practice-654d6",
    storageBucket: "practice-654d6.appspot.com",
    messagingSenderId: "886569256691",
    appId: "1:886569256691:web:e8b4673621a0e8e42e5986"
  };
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser()
{
  var user= document.getElementById("user_name").value;
  firebase.database().ref("/").child(user).update({
   purpose: "adding user"
  });
  document.getElementById("user_name").value="";
}