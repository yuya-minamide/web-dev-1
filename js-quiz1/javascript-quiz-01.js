// Q1
// Which value does x have after execution of the following code?
// Tigger

// Q2
function secondIndexOf(s1, s2) {
	let firstIndex = s1.indexOf(s2);
	let secondIndex = s1.indexOf(s2, firstIndex + 1);
	if (secondIndex == -1) {
		return -1;
	}
	return secondIndex;
}

// Q3
function equals(a, b) {
	if (a === b) {
		return "EQUAL";
	} else {
		return "UNEQUAL";
	}
}

// Q4
const age = 19;
if (age > 18) {
	return "Old enough";
} else {
	return "Too young";
}

// Q5
function repdigit(n) {
	let ones = n % 10;
	let tens = Math.floor(n / 10);
	if (ones === tens) {
		return "Repdigit!";
	} else {
		return "No Repdigit!";
	}
}

// Q6
function unequal(a, b, c) {
	return a !== b && a !== c && b !== c;
}

// Q7
// The first alert will execute because the expression inside the if statement evaluates to true.
//The result of the expression -1 || 0 is -1, which is a truthy value and thus the if statement is true.

// Q8
let login = prompt("Please enter your login: ");
if (login === "Admin") {
	let password = prompt("Please enter your password: ");
	if (password === "TheMaster") {
		alert("Welcome!");
	} else if (password === null || password === "") {
		alert("Canceled");
	} else {
		alert("Wrong password");
	}
} else if (login === null || login === "") {
	alert("Canceled");
} else {
	alert("I don't know you");
}
