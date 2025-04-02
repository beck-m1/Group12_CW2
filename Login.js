Accounts = {
    "JohnSmith": "password123",
    "NicholasPrice": "pass111",
    "KateJohnson": "Access321",
};

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

        $("#buttonDiv").css("top", "110px");
        if ($("#confirmPasswordControls").is(":hidden")) {
            $("#confirmPasswordControls").css("display", "initial");
            $("#headerLogin").text("Create New Account");
            $("#createLogin").text("Sign In");
            $("#login").text("Create Account");
        }
        else {
            $("#confirmPasswordControls").css("display", "none");
            $("#headerLogin").text("Login");
            $("#createLogin").text("Sign Up");
            $("#login").text("Login");
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

    function isEmptyOrSpaces(str) {
        return str === null || str === undefined || str.trim() === '';
    }

    $("#login").click(function() {
        if ($("#login").text() == "Create Account") {
            console.log("test");
            if (isEmptyOrSpaces($("#txtUsername").val())) {
                usernameCheck = 1;
                $("#txtUsername").val("Invalid Username");
                $("#txtUsername").css("color", "red");
            }
            if (isEmptyOrSpaces($("#txtPassword").val())) {
                passwordCheck = 1;
                $("#txtPassword").val("Invalid Password");
                $("#txtPassword").css("color", "red");
                $("#txtConfirmPassword").prop("type", "text");
            }
            if (isEmptyOrSpaces($("#txtConfirmPassword").val())) {
                confirmPasswordCheck = 1;
                $("#txtConfirmPassword").val("Passwords do not match");
                $("#txtConfirmPassword").css("color", "red");
                $("#txtConfirmPassword").prop("type", "text");
            }
        }
        else {
            if (!($("#txtUsername").val() in Accounts)) {
                $("#txtUsername").val("Incorrect Username");
                $("#txtUsername").css("color", "red");
                usernameCheck = 1;
                return;
            }
            if ($("#txtPassword").val() != Accounts[$("txtUsername").text]) {
                $("#txtPassword").val("Incorrect Password");
                $("#txtPassword").css("color", "red");
                $("#txtPassword").prop("type", "text");
                passwordCheck = 1;
                return;
            }
        }
    });
})