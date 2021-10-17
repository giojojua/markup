function isGood(password) {
    let password_strength = document.getElementById("password-text");

    //TextBox left blank.
    if (password.length < 6) {
        password_strength.innerHTML = "";
        return;
    }

    //Regular Expressions.
    let regex = [];
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.

    let passed = 0;

    //Validate for each Regular Expression.
    for (let i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    //Display status.
    let strength = "";
    switch (passed) {
        case 0:
        case 1:
            strength = "<span class='progress-bar' style='height: 4px; width: 35%; background-color: red'></span>" +
                "<p style='color: red'>Weak Password try better one</p>";
            break;
        case 2:
            strength = "<span class='progress-bar' style='height: 4px; width: 70%; background-color: orange'></span>" +
                "<p style='color: orange'>Not bad but you know you can do it better</p>";
            break;
        case 3:
            strength = "<span class='progress-bar' style='height: 4px; width: 100%; background-color: green'></span>" +
                "<p style='color: green'>Strong Password</p>";
            break;

    }
    password_strength.innerHTML = strength;
}

function passwordShow() {
    let passwordToggle = document.getElementById("password");
    if (passwordToggle.type === "password") {
        passwordToggle.type = "text";
    } else {
        passwordToggle.type = "password";
    }
}