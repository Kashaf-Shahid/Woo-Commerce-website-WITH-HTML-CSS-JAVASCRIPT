// Get the elements by their correct IDs
const bar = document.getElementById('bar');
const close = document.getElementById('close');

// FIX: Change 'nav' to 'navbar' because that is the ID used in your HTML 
const nav = document.getElementById('navbar'); 

// 1. Logic for the 'Open' icon (Hamburger/Outdent Bar)
if (bar) {
    bar.addEventListener('click', () => {
        // This adds the 'active' class (which slides the menu in, thanks to your CSS)
        nav.classList.add('active'); 
    })
}

// 2. Logic for the 'Close' icon (X)
if (close) {
    close.addEventListener('click', () => {
        // This removes the 'active' class (which slides the menu out, thanks to your CSS)
        nav.classList.remove('active'); 
    })
}

/*const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
*/
    
document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('.password-toggle');

    if (toggleIcon && passwordField) {
        toggleIcon.addEventListener('click', () => {
            // Toggle the type attribute between 'password' and 'text'
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            
            // Toggle the eye icon appearance
            toggleIcon.classList.toggle('fa-eye');
            toggleIcon.classList.toggle('fa-eye-slash');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // 1. Password Visibility Toggle Logic
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('password-toggle');
    const eyeOpen = document.getElementById('eye-open');
    const eyeClosed = document.getElementById('eye-closed');

    if (toggleButton && passwordField) {
        toggleButton.addEventListener('click', () => {
            // Toggle the input type between 'password' and 'text'
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            
            // Toggle the eye icon visibility
            if (type === 'text') {
                eyeOpen.style.display = 'none';
                eyeClosed.style.display = 'block';
            } else {
                eyeOpen.style.display = 'block';
                eyeClosed.style.display = 'none';
            }
        });
    }




    // 2. Simple Form Submission Handler
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Log form data to the console for demonstration purposes
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
        console.log('Registration attempt submitted with data:', data);

        // Display a success message on the UI
        const formContainer = document.querySelector('.w-full.max-w-xl');
        
        // Remove any existing success message before displaying a new one
        const existingMessage = document.getElementById('success-message');
        if (existingMessage) existingMessage.remove();

        const successMessage = document.createElement('div');
        successMessage.id = 'success-message';
        successMessage.className = 'mt-6 p-4 bg-green-100 text-green-700 rounded-lg font-medium text-center';
        successMessage.textContent = 'Form submitted successfully! (Check console for logged data)';
        formContainer.appendChild(successMessage);
        
        form.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
});
