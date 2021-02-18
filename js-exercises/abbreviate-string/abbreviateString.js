import { isString } from "util";

function abbreviateString(str) {
	let cleanedString = str.trim().replace(/\s\s+/g, " ").split(" ");
    let printString = `${cleanedString[0]} ${cleanedString[cleanedString.length - 1].charAt(0)}.`
    return printString;
}

export { abbreviateString };
