// // Include this script at the end of your body or in a separate script file
// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get the form values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Sending email using EmailJS
//     emailjs.send('service_a66nycd', 'template_epxjhs9', {
//         from_name: name,
//         from_email: email,
//         message: message
//     })
//     .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//         document.getElementById('popup').classList.remove('hidden'); // Show popup
//     }, function(error) {
//         console.log('FAILED...', error);
//     });

//     // Reset the form fields
//     document.getElementById('contactForm').reset();
// });

// // Close the popup
// document.getElementById('closePopup').addEventListener('click', function () {
//     document.getElementById('popup').classList.add('hidden'); // Hide popup
// });
