// ! Letters, Numbers & Special Characters set

// http://www.net-comber.com/charset.html

// Temporary random functions constant

const randomFunctions = {
	lower: getRandomLowerLetter,
	upper: getRandomUpperLetter,
	number: getRandomNumber,
	special: getRandomSpecialChar
};

// Function to prompt user for password options
function getPasswordOptions() {}

// * GENERATING RANDOM CHARACTERS FOR PASSWORD
// Generate random lowercase letter from character set
function getRandomLowerLetter() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Generate random uppercase letter from character set
function getRandomUpperLetter() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Generate random number from character set
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Generate random special character from character set
function getRandomSpecialChar() {
	const specialChars = "@%+/'!#$^?:,.()[]{}~_-";
	return specialChars[Math.floor(Math.random() * specialChars.length)];
}

console.log(getRandomSpecialChar())





// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
