const firebaseConfig = {
    apiKey: "AIzaSyCRUpoUxBhGiHg9_hMjfvkNyLp0sRJnto8",
    authDomain: "lets-chat-39381.firebaseapp.com",
    databaseURL: "https://lets-chat-39381-default-rtdb.firebaseio.com",
    projectId: "lets-chat-39381",
    storageBucket: "lets-chat-39381.appspot.com",
    messagingSenderId: "764648023204",
    appId: "1:764648023204:web:1026800faabc31b4b87231"
  };
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome "+username+"!";
  function addroom(){
   roomname=document.getElementById("room_name").value ;
   firebase.database().ref("/").child(roomname).update({
         purpose:"addingroom"
   });
   localStorage.setItem("roomname",roomname);
   window.location="chat_page.html"
  }
  // Initialize Firebase
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();
// Initialize Firebase
function redirecttoroomname(name){
  localStorage.setItem("roomname",name);
  window.location="chat_page.html"
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("roomname");
  window.location="index.html"
}