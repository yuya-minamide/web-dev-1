/**
 * Q1
 * D
 * This is because of the way variable and function hoisting works in javascript.
 * When the function is defined, the var and let declarations for the name and age variables are hoisted to the top of the function scope,
 * but their assignments are not.
 */

/**
 * Q2
 * A
 * The output of the code +true; would be 1 because the + operator is used to convert the boolean value true to its numeric equivalent (1).
 * The output of the code !"Lydia"; would be false because the ! operator is used to negate a boolean value,
 * in this case the string "Lydia" is coerced to boolean, which is always true, and then negated so the final output is false.
 */

/**
 * Q3
 * C
 * JavaScript will try to convert the string "2" to a number so it can add it to the number 1. In this case,
 * the result of adding them together is the string "12" because the string "2" is concatenated with the number 1.
 */

/**
 * Q4
 * C
 * At the first step is added 1 after running console.log.
 * Then the second step is added 1 before running console.log.
 * Last step it's gonna show up current value.
 */

/**
 * Q5
 * B
 * The double negation is used to coerce a non-boolean value to boolean.
 * The first negation operator will coerce the value to a boolean,
 * and the second negation operator will negate that boolean value.
 */

/**
 * Q6
 * B
 * First of all number 3 have to be added with number 4.
 * Then total is gonna be number 7 and be added string "5".
 * Final total should be "75".
 * In javascript, when you have to concat number and string, value is gonna be string.
 */

/**
 * Q7
 * C
 * The parseInt function stops parsing the string as soon as it encounters a character that is not a digit or that is not in the specified radix.
 * In this case, the first non-digit character encountered is the "*" character, so the function stops parsing at that point and returns the integer 7.
 */

/**
 * Q8
 */
function indexOfIgnoreCase(s1, s2) {
	return s1.toLowerCase().indexOf(s2.toLowerCase());
}

/**
 * Q9
 */
function firstChar(text) {
	for (let i = 0; i < text.length; i++) {
		if (text[i] !== " ") {
			return text[i];
		}
	}
}

/**
 * Q10
 */
function normalize(date) {
	return date.replace(/-/g, "/");
}
