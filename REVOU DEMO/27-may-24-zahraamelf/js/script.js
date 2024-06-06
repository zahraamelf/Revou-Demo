// Welcome Message
const userName = localStorage.getItem('userName');
if (userName) {
  document.querySelector('#banner h1').textContent = `Hi ${userName}, Welcome to Website`;
} else {
  document.querySelector('#banner h1').textContent = 'Hi, Welcome to Website';
}

// Form Validation and Submission
const messageForm = document.getElementById('messageForm');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (name && email && phone && message) {
    // Form is valid, submit the form
    console.log('Form submitted successfully!');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);

    // Store the user name in local storage
    localStorage.setItem('userName', name);

    // Reset the form
    messageForm.reset();
  } else {
    // Form is invalid, show an error message
    console.error('Please fill in all the fields!');
  }
});

// JavaScript Validation for Form Fields
const formFields = document.querySelectorAll('#messageForm input, #messageForm textarea');

formFields.forEach((field) => {
  field.addEventListener('input', () => {
    if (field.value.trim()!== '') {
      field.classList.remove('error');
    } else {
      field.classList.add('error');
    }
  });
});