// Get modal elements
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');

// Get open modal buttons
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

// Get close buttons for modals
const closeLoginBtn = document.getElementById('close-login');
const closeSignupBtn = document.getElementById('close-signup');

// Get switch link elements (Login -> Signup and Signup -> Login)
const openSignupLink = document.getElementById('open-signup');
const openLoginLink = document.getElementById('open-login');

// Open Login Modal
loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
    signupModal.style.display = 'none'; // Ensure signup modal is hidden
});

// Open Signup Modal
signupBtn.addEventListener('click', function() {
    signupModal.style.display = 'block';
    loginModal.style.display = 'none'; // Ensure login modal is hidden
});

// Close Login Modal
closeLoginBtn.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

// Close Signup Modal
closeSignupBtn.addEventListener('click', function() {
    signupModal.style.display = 'none';
});

// Switch from Login to Signup Modal
openSignupLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    loginModal.style.display = 'none'; // Close the login modal
    signupModal.style.display = 'block'; // Open the signup modal
});

// Switch from Signup to Login Modal
openLoginLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    signupModal.style.display = 'none'; // Close the signup modal
    loginModal.style.display = 'block'; // Open the login modal
});

// Close the modal when clicking outside the content
window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
});
