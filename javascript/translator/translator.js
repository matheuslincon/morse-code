export const engToMorse = (text, morseCoder) => {
    if (!isValidText(text, morseCoder)) {
		throw new Error("Error: Text include characters that doesn't exist in Morse code");
	}

    const textArr = text.toUpperCase().split("");
    const morseCode = textArr.map((char) => {
        return morseCoder[char]
    })

    return morseCode.join(" ");
};

export const morseToEng = (morse, morseCoder) => {
    if (!isValidMorse(morse, morseCoder)) {
		throw new Error("Error: Please ensure that the code only consists of ., -, separate code by space and use / for spaces between words.");
	}

    const morseArr = morse.split(" ");
    const text = morseArr.map((code) => {
        return Object.keys(morseCoder).find(key => morseCoder[key] === code);
    })
    return text.join("").toUpperCase();
};

export const isValidText = (text, morseCoder) => {
    const textArr = text.toUpperCase().split("")
    const valid = textArr.map((char) => morseCoder[char])

    return !valid.includes(undefined);
}

export const isValidMorse = (morse, morseCoder) => {
    const morseArr = morse.split(" ")
    const valid = morseArr.map((code) => Object.keys(morseCoder).find(key => morseCoder[key] === code))

    return !valid.includes(undefined);
}