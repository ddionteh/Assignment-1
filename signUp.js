const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // preventing form submit
    forms.classList.toggle("show-signup");
  });
});

// Log In function
function loginUser(event) {
  event.preventDefault(); // Prevent form submission to server

  // Retrieve input values
  const username = document.querySelector('.sign-up-field input[type="username"]').value;
  const password = document.querySelector('.sign-up-field input[type="password"]').value;

  // Check if credentials match
  if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
    alert("Login successful!");
    // Set the login state flag
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = '/index.html'; 
  } else {
    alert("Invalid credentials!");
  }
}

// Sign Up function
function registerUser(event) {
  event.preventDefault();

  // Retrieve values from form
  const username = document.querySelector('.sign-up-data input[type="username"]').value;
  const password = document.querySelector('.sign-up-field input[type="password"]').value;
  const profilePic = document.querySelector('.sign-up-data input[type="file"]').files[0]; 

  if (!username || !password || !profilePic) { 
    alert("All fields are required.");
    return;
  }

  // Storing the user data
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  localStorage.setItem('profilePic', URL.createObjectURL(profilePic)); 

  alert("Registration successful!");
  // Set the login state flag
  localStorage.setItem('isLoggedIn', 'true');
  // Direct users back to home page
  window.location.href = '/index.html'; 
}


// Add event listeners for the submit buttons
sign_in_btn.addEventListener("click", loginUser);
sign_up_btn.addEventListener("click", registerUser);

document.getElementById('profilePic').addEventListener('change', function() {
  // Get the selected file name
  const fileName = this.files[0].name;

  // Update the label text
  document.getElementById('fileLabel').textContent = fileName;
});

document.getElementById('profilePic').addEventListener('change', function() {
  // Get the selected file
  const file = this.files[0];

  if (file) {
      // Update the label text
      document.getElementById('fileLabel').textContent = file.name;

      // Create a new FileReader object
      const reader = new FileReader();

      // Read the selected file as a base64 string
      reader.readAsDataURL(file);
  } else {
      // Reset the label text and hide the image
      document.getElementById('fileLabel').textContent = 'Choose image';
  }
});



