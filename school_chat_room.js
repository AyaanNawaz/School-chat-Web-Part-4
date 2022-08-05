firebaseConfig = {
      apiKey: "AIzaSyBD-L_HBQirGTI31RISG79sa3eohfyiseQ",
      authDomain: "micro-school-chat-web.firebaseapp.com",
      databaseURL: "https://micro-school-chat-web-default-rtdb.firebaseio.com",
      projectId: "micro-school-chat-web",
      storageBucket: "micro-school-chat-web.appspot.com",
      messagingSenderId: "354114092013",
      appId: "1:354114092013:web:49f2bd13f261c66b3545e4",
      measurementId: "G-KLQ543CTEZ"
    };

firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
  room_name=document.getElementById("room_name").value ;
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
        });
        window.location="school_chat_page.html"
  
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+" </div><hr>";
  "<br>"
  document.getElementById("output").innerHTML+=row;
        //End code
        });});}
  getData();
  function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="school_chat_page.html";
  }

function logOut(){
    window.location="index.html"
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    }
   
