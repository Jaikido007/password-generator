// ! Letters, Numbers & Special Characters set

// http://www.net-comber.com/charset.html

//* DOM Elements
const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const lowercaseElement = document.getElementById("lowercase");
const uppercaseElement = document.getElementById("uppercase");
const numbersElement = document.getElementById("numbers");
const specialCharElement = document.getElementById("symbols");
const generateElement = document.getElementById("generate");
const clipboardElement = document.getElementById("clipboard");

//* Randomly generated character functions using key:value pairs

const randomFunctions = {
	lower: getRandomLowerLetter,
	upper: getRandomUpperLetter,
	number: getRandomNumber,
	special: getRandomSpecialChar,
};

//* Generate event listener
generateElement.addEventListener("click", () => {
	// using + operator instead of parseInt() to convert string to number *** only works with strings that contain numerical values
	const length = +lengthElement.value;
	const hasLower = lowercaseElement.checked;
	const hasUpper = uppercaseElement.checked;
	const hasNumber = numbersElement.checked;
	const hasSymbol = specialCharElement.checked;

	resultElement.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		length
	);
});

//* Function to generate password
function generatePassword(lower, upper, number, special, length) {
	// 1: Initialize a password variable
	// 2: Filter out unchecked types from password
	// 3: Loop over length, call generator function for each type
	// 4: Add the final password to the password variable and return it to the user

	// 1: Initialize a password variable
	let generatedPassword = "";

	const typesCount = lower + upper + number + special;

	console.log("typesCount: ", typesCount);

	// 2: Filter out unchecked types from password
	const typesArray = [{ lower }, { upper }, { number }, { special }].filter(
		(typesItem) => Object.values(typesItem)[0]
	);

	console.log("typesArray: ", typesArray);

	if (typesCount === 0) {
		return "";
	}
	// 3: Loop over length, call generator function for each type
	for (let i = 0; i < length; i += typesCount) {
		typesArray.forEach((type) => {
			const functionName = Object.keys(type)[0];
			console.log("functionName: ", functionName);

			generatedPassword += randomFunctions[functionName]();
		});
	}
	console.log("generatedPassword is: ", generatedPassword);
	return generatedPassword;
}

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
