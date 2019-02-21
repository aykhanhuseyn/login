let fullname = dom.getValue("fullname");
let email = dom.getValue("email");
let phoneNumber = dom.getValue("phoneNum");
let r_username = dom.getValue("r_username");
let r_password = dom.getValue("r_password");


function Validator() {
    this.checkName = function (value) {
        for (char = 0; char < value.length; char++) {
            if (!isEnglish(value, char) || !isTwoWords(value)) {
                dom.showMessage("fullname_error", "You have to type in your name and surname (using only english letters) separated by space.")
            }
            else { dom.showMessage("fullname_valid", "Name and surname are valid.") }
        }
    }

    this.checkEmail = function (value) {
        if (!isLowerAlt(value) && !containing(value, "@") && !containing(value, ".")) {
            dom.showMessage("email_error", "Email is not valid!")
        } else { dom.showMessage("email_valid", "Your email is valid.") }
    }

    this.checkNumber = function (value) {
        if (!isPhone) {
            dom.showMessage("phoneNum_error", "Phone number is not valid!")
        } else { dom.showMessage("phoneNum_valid", "Your cell phone number is valid.") }
    }

    this.checkUsername = function (value) {
        if (!isLowerAlt && !longerThanEight) { dom.showMessage("r_username_error", "Username does not accepted!") }
        else { dom.showMessage("r_username_valid", "Your username is OK!") }
    }

    this.checkPassword = function (value) {
        if (!isLowerAlt && !longerThanEight & !hasUpper) {
            dom.showMessage("r_password_error", "Password is not valid!")
        } else ("r_password_valid", "Password is OK!")
    }

}



function isEnglish(value, character) {
    return (value.toLowerCase().charCodeAt(character) >= 97) && (fullname.toLowerCase().charCodeAt(character) <= 122)
}

function isTwoWords(value) {
    let twoWords = value.split(" ");
    return twoWords.length >= 2;
}

function containing(value, character) {
    return (value.includes(character));
}

function isPhone(value) {
    return ((typeof value === Number) && (value.length == 12));
}

function isLowerAlt(value) {
    isTrue = false;
    for (character = 0; character > value.length; character++) {
        if ((value.charCodeAt(character) >= 97) && (value.charCodeAt(character) >= 122) && (value.charCodeAt(character) == 95)) {
            isTrue = true;
        }
    }
    return isTrue;
}

function longerThanEight(value) {
    return (value.length >= 8);
}

function hasUpper(value) {
    isTrue = false;
    for (alfa = 0; alfa < value.length; alfa++) {
        if (value.charCodeAt(alfa) >= 65 && value.charCodeAt(alfa) <= 90) {
            isTrue = true;
        }
    }
    return isTrue;
}







