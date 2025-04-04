localStorage.setItem("JohnSmith", "password123");
localStorage.setItem("NicholasPrice", "pass111");
localStorage.setItem("KateJohnson", "Access321");

let usernameCheck = 0;
let passwordCheck = 0;
let confirmPasswordCheck = 0;

$(document).ready(function() {
    $("#createLogin").click(function() {
        $("#txtUsername").val("");
        $("#txtPassword").val("");
        $("#txtConfirmPassword").val("");

        usernameCheck = 0;
        passwordCheck = 0;
        confirmPasswordCheck = 0;
        
        if ($("#confirmPasswordControls").is(":hidden")) {
            $("#headerLogin").text("Create New Account");
            $("#createLogin").text("Sign In");
            $("#login").text("Create Account");

            //Animation to transition to Create Account
            $("#buttonDiv").animate({
                top: '+=25px'
            },function() {
                $("#confirmPasswordControls").fadeIn();
            });
            
        } else {
            $("#headerLogin").text("Login");
            $("#createLogin").text("Sign Up");
            $("#login").text("Login");

            //Animation to transition to login
            $("#confirmPasswordControls").fadeOut(function() {
                $("#buttonDiv").animate({
                    top: '-=25px'
                })
            });
        }
    });

    $("#txtUsername").click(function() {
        if (usernameCheck === 1) {
            $("#txtUsername").val("");
            $("#txtUsername").css("color", "black");
            usernameCheck = 0;
        }
    });

    $("#txtPassword").click(function() {
        if (passwordCheck === 1) {
            $("#txtPassword").val("");
            $("#txtPassword").css("color", "black");
            $("#txtPassword").prop("type", "password");
            passwordCheck = 0;
        }
    });

    $("#txtConfirmPassword").click(function() {
        if (confirmPasswordCheck === 1) {
            $("#txtConfirmPassword").val("");
            $("#txtConfirmPassword").css("color", "black");
            $("#txtConfirmPassword").prop("type", "password");
            confirmPasswordCheck = 0;
        }
    });

    $("#login").click(function() {
        const isCreateAccount = $(this).text() == "Create Account";
        const username = $("#txtUsername");
        const password = $("#txtPassword");
        const confirmPassword = $("#txtConfirmPassword");
        
        //Reset checks
        usernameCheck = passwordCheck = confirmPasswordCheck = 0;
        
        //Displays error
        function showError(field, message, showAsText = false) {
            field.val(message).css("color", "red");
            if (showAsText) field.prop("type", "text");
            return 1; //Return check number
        }
        
        //Check if input is empty
        function isEmptyOrSpaces(str) {
            return str === null || str === undefined || str.trim() === '';
        }

        //Check if inputted information is invalid
        if (isCreateAccount) {
            if (isEmptyOrSpaces(username.val())) usernameCheck = showError(username, "Invalid Username");
            if (isEmptyOrSpaces(password.val())) passwordCheck = showError(password, "Invalid Password", true);
            if (isEmptyOrSpaces(confirmPassword.val())) confirmPasswordCheck = showError(confirmPassword, "Passwords do not match", true);
        } else {
            if (localStorage.getItem(username.val()) === null) {
                usernameCheck = showError(username, "Incorrect Username");
                return;
            }
            if (password.val() != localStorage.getItem(username.val())) {
                passwordCheck = showError(password, "Incorrect Password", true);
                return;
            }
        }

        if (isCreateAccount) {
            localStorage.setItem(username.val(), password.val());
            for (var i = 0; i < localStorage.length; i++){
                console.log(localStorage.key(i));
            }
            
        }
        else {
            //Go to new homepage
            document.cookie = `username=${username}`;
        }
    });

    // Colour Blind Mode Functionality
    $("#colourBlind").click(function() {
        $("body").addClass("colour-blind");
    });

    $("#restoreColours").click(function() {
        $("body").removeClass("colour-blind");
    });
});
