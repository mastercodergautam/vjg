// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCRUpoUxBhGiHg9_hMjfvkNyLp0sRJnto8",
    authDomain: "lets-chat-39381.firebaseapp.com",
    databaseURL: "https://lets-chat-39381-default-rtdb.firebaseio.com",
    projectId: "lets-chat-39381",
    storageBucket: "lets-chat-39381.appspot.com",
    messagingSenderId: "764648023204",
    appId: "1:764648023204:web:1026800faabc31b4b87231"
  };
  
  // Initialize Firebase
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
  
}



