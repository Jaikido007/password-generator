// ! Letters, Numbers & Special Characters set

// http://www.net-comber.com/charset.html

// ! A string of password characters

// A string of lowercase characters to be included in password
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// A string of uppercase characters to be included in password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// A string of numeric characters to be included in password
const numbers = "0123456789";
// A string of special characters to be included in password
const specialChars = "@%+/'!#$^?:,.()[]{}~_-";

// ! An array of password characters

// Array of special characters to be included in password
var specialCharacters = [
	"@",
	"%",
	"+",
	"\\",
	"/",
	"'",
	"!",
	"?",
	"#",
	"$",
	"^",
	".",
	",",
	":",
	"(",
	")",
	"{",
	"}",
	"[",
	"]",
	"~",
	"-",
	"_",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

// Function to prompt user for password options
function getPasswordOptions() {}

// Function for getting a random element from an array
function getRandom(arr) {}

// Generate random lowercase letter from character set

function getRandomLowerLeter() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Getting a random whole number starting from character set 97 (a) and randomising which number to return by the number of letters in the alphabet.
console.log(Math.floor(Math.random() * 26) + 97);

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
