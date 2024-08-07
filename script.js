const passwordBox = document.getElementById("password"); 
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXZY";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$%^&*()<>_+=-"
const allChars = upperCase + lowerCase+ num + symbol

function createPass (){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += num[Math.floor(Math.random()*num.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;
};
function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}



