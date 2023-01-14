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

//* Generate event listeners
// Clipboard to copy password
clipboardElement.addEventListener("click", async () => {
	const password = resultElement.innerText;
	if (!password) {
		return;
	}
	try {
		await navigator.clipboard.writeText(password);
		alert("Password copied to clipboard");
	} catch (err) {
		console.error("Failed to copy text: ", err);
	}
});
// Check options before generating password
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
	// Initialize a password variable
	let generatedPassword = "";
	const typesCount = lower + upper + number + special;
	// Filter out unchecked types from password
	const typesArray = [{ lower }, { upper }, { number }, { special }].filter(
		(typesItem) => Object.values(typesItem)[0]
	);
	// Setting an alert if no options for password are chosen
	if (typesCount === 0) {
		confirm(
			"CAN NOT GENERATE PASSWORD!\n\nPassword must include at least one option from:\nlowercase letters, uppercase letters, numbers or special characters!\n\nPlease select your option(s) using the checkboxes below!"
		);
		return "";
	}

	// Loop over length, call generator function for each type
	for (let i = 0; i < length; i += typesCount) {
		typesArray.forEach((type) => {
			const functionName = Object.keys(type)[0];
			generatedPassword += randomFunctions[functionName]();
		});
	}
	// Add the final password to the password variable and return it to the user
	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
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

// Alert to user

alert(
	"WELCOME TO PASSWORD GENERATOR:\nHow to use:\n* Please select a password length between 10 and 64 characters.\n* Select which characters you want included in your password using the checkboxes.\n*Click the generate password button to reveal your randomly generated password.\n(default setting will generate a 20-character password containing lowercase & uppercase letters, numbers and special characters)"
);
