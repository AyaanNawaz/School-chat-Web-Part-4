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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
msg=document.getElementById("msg").value ;
if(msg!=""){
firebase.database().ref(room_name).push({
name : user_name,
message : msg,
like : 0
});
console.log(msg);
document.getElementById("msg").value ="";
}
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4' style='color:rgb(66, 64, 63); font-family:Times New Roman;'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id + " value=" +like +" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Likes For This Message: "+ like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;


//End code
      } });  }); }
getData();

function updateLike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value ;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
like:updated_likes
});
}

function logOut(){
      window.location="index.html"
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      }
      function back(){
      window.location="school_chat_room.html"
      }
      