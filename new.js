
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAKay-Giy6zYBhFb85tgaaGA-XgyI1JR8M",
  authDomain: "task-2795a.firebaseapp.com",
  databaseURL: "https://task-2795a-default-rtdb.firebaseio.com",
  projectId: "task-2795a",
  storageBucket: "task-2795a.appspot.com",
  messagingSenderId: "908471548208",
  appId: "1:908471548208:web:ad3a1ca5e12478320a30f5",
  measurementId: "G-SEG5E622LT"
};


firebase.initializeApp(firebaseConfig);

function logout(){
    window.location="index.html";
}
user_name=localStorage.getItem("name of the user");
document.getElementById("user_name").innerHTML ="Hi.." + user_name;
function addroom()
{
    searchroom=document.getElementByIdO("searchroom").value;
    firebase.database().ref("/").child(searchroom).update({
        purpose:"searching"
});
    localStorage.setItem("searchroom",searchroom);
    window.location="new.html";
}