
const firebaseConfig =


{
    apiKey: "AIzaSyDk2aMFI7NEZpGEnc8o3mNeqFXQyEXXnO0",
    authDomain: "chandra-21353.firebaseapp.com",
    databaseURL: "https://chandra-21353-default-rtdb.firebaseio.com",
    projectId: "chandra-21353",
    storageBucket: "chandra-21353.appspot.com",
    messagingSenderId: "316110194152",
    appId: "1:316110194152:web:4ad6685266ddb016c8905d",
    measurementId: "G-88SESE99R2"
  };


  firebase.initializeApp(firebaseConfig);

  var chandraDb = firebase.database().ref("Chandra");

  document.getElementById("contact-details").addEventListener("submit", jaya);

  function jaya(e){
    alert("details entered")

    e.preventDefault();

    
    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");

    

if(name == "")
{
    alert("Please enter your name")
}
else if(email == "")
{
   alert("Please enter your email id")
}
else if(message == "")
{
   alert("Please enter some message")
}
else{
 
    store(name, email, message); 
} 


    
    

    
    
    document.getElementById("contact-details").reset();
   // console.log(name, email, message);

  
}





        const store =(name, email, message) => {
            var newstore =chandraDb.push();
            newstore.set({
                Name: name,
                Email: email,
                Message: message,
            });
          };

     


       

   

  



    


//=====================portfolio=============================//

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => 
{
    navbar.classList.toggle('active');
}

//for dark mode

let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
       
    }
    else{
        
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}



const getElementVal = (id) => {
    return document.getElementById(id).value;
    };