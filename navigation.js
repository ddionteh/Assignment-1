function updateNavigationWithUserProfile() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const profilePicBase64 = localStorage.getItem('profilePic');

    const userPfpElement = document.querySelector('.user-pfp');
    const userPfpMenuElement = document.querySelector('.user-pfp-menu');
    const loginSignupButton = document.querySelector('.Login-Signup');
    const loginSignupMenuButton = document.querySelector('.Login-Signup-menu');

    if (isLoggedIn && profilePicBase64) {
        if (userPfpElement) {
            userPfpElement.src = profilePicBase64;
            userPfpElement.style.display = 'block';
        }
        if (userPfpMenuElement) {
            userPfpMenuElement.src = profilePicBase64;
            userPfpMenuElement.style.display = 'block';
        }

        loginSignupButton.style.display = 'none';
        loginSignupMenuButton.style.display = 'none';
    } else {
       

        // Ensure profile pictures are hidden if not logged in
        if (userPfpElement) userPfpElement.style.display = 'none';
        if (userPfpMenuElement) userPfpMenuElement.style.display = 'none';
    }
}

// Check if the user is logged in
if (localStorage.getItem('isLoggedIn') === 'true') {
    // Get the profile picture URL
    var profilePicUrl = localStorage.getItem('profilePic');

    // Update the profile picture source
    document.getElementById('user-pfp').style.backgroundImage = 'url('  + profilePicUrl + ')';


    // Update the navigation item
    document.getElementById('nav-item').innerHTML = `
        <div class="sign-up-container">
            <img id="user-pfp" class="user-pfp" src="${profilePicUrl}" alt="User Profile">
        </div>
    `;
} else {
    // Update the navigation item
    document.getElementById('nav-item').innerHTML = `
        <div class="sign-up-container">
            <a href="signUp.html">Sign Up</a>
        </div>
    `;
}
