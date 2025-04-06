document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (name === '' || email === '' || password === '') {
        document.getElementById('message').innerText = 'Please fill in all fields.';
        return;
    }

    // Simulate a successful registration
    document.getElementById('message').innerText = 'Registration successful! Welcome, ' + name + '!';
    
    // Clear the form
    document.getElementById('registrationForm').reset();
});
