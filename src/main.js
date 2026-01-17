// Educational Phishing Awareness Demo
// NO DATA IS CAPTURED OR TRANSMITTED

// Get DOM elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const togglePasswordBtn = document.getElementById('toggle-password');
const loginFormContainer = document.getElementById('login-form-container');
const pwnedMessage = document.getElementById('pwned-message');
const displayUsername = document.getElementById('display-username');
const resetBtn = document.getElementById('reset-btn');

// Toggle password visibility
togglePasswordBtn.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    
    // Update icon
    if (type === 'text') {
        togglePasswordBtn.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
            </svg>
        `;
    } else {
        togglePasswordBtn.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        `;
    }
});

// Enable/disable login button based on input
function checkInputs() {
    if (emailInput.value.trim() && passwordInput.value.trim()) {
        loginBtn.classList.add('active');
    } else {
        loginBtn.classList.remove('active');
    }
}

emailInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

// Handle form submission - Show "pwned" message
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get entered username
    const enteredEmail = emailInput.value.trim();
    const username = enteredEmail.split('@')[0] || enteredEmail;
    
    // Display the username in the message
    displayUsername.textContent = username;
    
    // Hide login form with fade out
    loginFormContainer.style.transition = 'opacity 0.3s ease-out';
    loginFormContainer.style.opacity = '0';
    
    setTimeout(() => {
        loginFormContainer.style.display = 'none';
        
        // Show pwned message with fade in
        pwnedMessage.classList.remove('hidden');
        pwnedMessage.style.display = 'block';
        
        // Trigger reflow to ensure animation plays
        pwnedMessage.offsetHeight;
        
        pwnedMessage.style.opacity = '1';
    }, 300);
    
    // Log to console (educational purpose only - shows no actual data transmission)
    console.log('🎓 EDUCATIONAL DEMO: No data was captured or sent anywhere!');
    console.log('✅ This is how phishing attacks work - they capture your credentials.');
    console.log('⚠️ Always verify URLs and use unique passwords!');
});

// Reset button - Return to login form
resetBtn.addEventListener('click', () => {
    // Hide pwned message
    pwnedMessage.style.opacity = '0';
    
    setTimeout(() => {
        pwnedMessage.style.display = 'none';
        pwnedMessage.classList.add('hidden');
        
        // Show login form again
        loginFormContainer.style.display = 'block';
        loginFormContainer.style.opacity = '0';
        
        // Trigger reflow
        loginFormContainer.offsetHeight;
        
        loginFormContainer.style.opacity = '1';
        
        // Clear form inputs
        emailInput.value = '';
        passwordInput.value = '';
        passwordInput.type = 'password';
        loginBtn.classList.remove('active');
        
        // Reset password toggle icon
        togglePasswordBtn.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        `;
    }, 300);
});

// Log educational message on page load
console.log('%c🎓 PHISHING AWARENESS DEMO', 'font-size: 20px; font-weight: bold; color: #00aeef;');
console.log('%cThis is an educational tool to demonstrate phishing attacks.', 'font-size: 14px;');
console.log('%cNO DATA IS CAPTURED OR TRANSMITTED.', 'font-size: 14px; font-weight: bold; color: #e74c3c;');
console.log('%cAlways verify URLs before entering credentials!', 'font-size: 14px; font-weight: bold;');
