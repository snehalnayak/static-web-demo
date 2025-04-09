document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (just for demo purposes)
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Please fill in both fields.';
    } else if (username === 'admin' && password === '1234') {
        document.getElementById('error-message').textContent = '';
        alert('Login successful!');
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});
