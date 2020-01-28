var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form  
function submitForm(e) {
    e.preventDefault();

    // Get Values
    var name = getInputVal('name');
    var course = getInputVal('course');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var address = getInputVal('address');

    // Save Message
    saveMessage(name, course, email, phone, address);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide Alert after 3 Seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear Form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save Message to firebase
function saveMessage(name, course, email, phone, address){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        course: course,
        email: email,
        phone: phone,
        address: address
    });
}