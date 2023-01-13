// ! Letters, Numbers & Special Characters set

// http://www.net-comber.com/charset.html

// DOM Elements
const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const lowercaseElement = document.getElementById('lowercase');
const upperElement = document.getElementById('upper');
const numbersElement = document.getElementById('numbers');
const specialCharElement = document.getElementById('specialChar');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

// Temporary random functions constant

const randomFunctions = {
	lower: getRandomLowerLetter,
	upper: getRandomUpperLetter,
	number: getRandomNumber,
	special: getRandomSpecialChar
};

// Event listeners
generateElement.addEventListener('click', () => {
	const length = lengthElement.value;

	console.log(length);
})

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
