document.getElementById('loginButton').addEventListener('click', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try{
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        if(response.ok){
            window.location.href = '/dashboard'
        }else{
            alert("Login Failed")
        }
    }catch(error){
        console.error("Error: ", error)
    }
});

// Redirect to the registration page when the register button is clicked
document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = '/register';
});