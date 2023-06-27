export const engToMorse = (word, morseCoder) => {
    const wordArr = word.toUpperCase().split("");
    const morseCode = wordArr.map((char) => {
        return morseCoder[char]
    })

    return morseCode.join(" ");
};

export const morseToEng = (morse, morseCoder) => {
    const morseArr = morse.split(" ");
    const word = morseArr.map((code) => {
        return Object.keys(morseCoder).find(key => morseCoder[key] === code);
    })
    return word.join("").toUpperCase();
};
