$(document).ready(function() {

// Function to make the form button interactive for users whilst sending and then display a sent message.
function sending() {
  let reserveForm = document.getElementById('#reservation-form');
  let btnSend = document.getElementById('#request-table-btn');
  let sendMessage = document.getElementById('#send-msg');
// Adds Event Listener to button that changes text when clicked on to say Sending.
    btnSend.addEventListener('click', () =>{
    btnSend.innerText = 'Sending..';
// Sets a 5 secon timeout before removing button/ form and displaying a sent message.
      setTimeout(() =>{
        btnSend.style.display = "none";
        reserveForm.style.display = "none";
        sendMessage.innerText = 'Your request has been sent, Thank you for your reservation!';
      },5000);
  });
};

// The Function that activates the email.js send method using the form parameters.
function sendMail(reserveForm) {
  emailjs.send("gmail", "reservations", {
    "from_name": reserveForm.name.value, 
    "from_email": reserveForm.emailaddress.value, 
    "phone_number": reserveForm.phone.value, 
    "guests": reserveForm.guestsbooked.value, 
    "date_time": reserveForm.datetime.value, 
    "message": reserveForm.messages.value
    })
    // responds to console if successful.
    .then(function(response) {
        console.log("SUCCESS", response);
      },
      // responds to console if there's an error.
      function(error) {
        console.log("FAILED", error);
      });
};

});