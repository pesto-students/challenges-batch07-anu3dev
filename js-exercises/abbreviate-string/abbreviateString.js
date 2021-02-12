import { isString } from "util";

function abbreviateString(str) {

	let split_names = str.trim().split(" ");
    let total_word = split_names.length;
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[(total_word -1)].charAt(0) + ".");
    }
    return split_names;
}

export { abbreviateString };
