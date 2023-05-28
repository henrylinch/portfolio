const characters =[
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", 
    "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
    "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",
    ">",".","?","/"
];


let passwordPrompt = document.getElementById("text4")
let passwordLength = prompt("Enter password length. (Maximum 24)")

function passwordOptions() {
    if (passwordLength === null || passwordLength === "") {
        passwordLength = 8
        passwordPrompt.textContent = "Password length: " + passwordLength
    }else if (passwordLength > 24) {
        passwordPrompt.textContent = "Password length: Oops, " + passwordLength + " is too long. Let's try 8."
        passwordLength = 8
    }else if (passwordLength < 4) {
        passwordPrompt.textContent = "Password length: Oops, " + passwordLength + " is too short. Let's try 4."
        passwordLength = 4
    }else {
        passwordPrompt.textContent = "Password length: " + passwordLength
    }
}

passwordOptions()

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

passwordOne.textContent = "Use: "
passwordTwo.textContent = "Or: "

function passwords() {
    for (let i = 0; i < passwordLength; i += 1) {
        let pass1 = characters[Math.floor(Math.random() * characters.length)]
        let pass2 = characters[Math.floor(Math.random() * characters.length)]  
        passwordOne.textContent += pass1
        passwordTwo.textContent += pass2
    }
}

function resetLength() {
    passwordOne.textContent = "Use: "
    passwordTwo.textContent = "Or: "
    passwordLength = prompt("Enter password length. (Maximum 24)")
    passwordPrompt.textContent = "Password length: " + passwordLength

    passwordOptions()
}

