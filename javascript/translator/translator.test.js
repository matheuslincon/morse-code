import {engToMorse, morseToEng, isValidText, isValidMorse} from './translator.js'
import { morseCode } from './morseCode.js'

const errorMessageEnglish = new Error("Error: Text include characters that doesn't exist in Morse code");
const errorMessageMorse = new Error("Error: Please ensure that the code only consists of ., -, separate code by space and use / for spaces between words.");

describe("test to the translation of english to morse code funciton", () => {
    it("will throw an error for an invalid text", () => {
		expect(() => engToMorse("hello~", morseCode)).toThrow(errorMessageEnglish)
		expect(() => engToMorse("<hello>", morseCode)).toThrow(errorMessageEnglish)
	});

    it("Should return the correct translation of single word", () => {
        expect(engToMorse("hello", morseCode)).toBe(".... . .-.. .-.. ---")
        expect(engToMorse("Wilzon!", morseCode)).toBe(".-- .. .-.. --.. --- -. -.-.--")
    })

    it("Should return the correct translation of multiple words", () => {
        expect(engToMorse("hello world", morseCode)).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
        expect(engToMorse("what's up", morseCode)).toBe(".-- .... .- - .----. ... / ..- .--.")
    })
})

describe("test to the translation of morse code to englishfunciton", () => {
    it("will throw an error for an invalid morse code", () => {
		expect(() => morseToEng(".............", morseCode)).toThrow(errorMessageMorse)
	});

    it("Should return the correct translation of single code", () => {
        expect(morseToEng(".... . .-.. .-.. ---", morseCode)).toBe("HELLO")
        expect(morseToEng(".-- .. .-.. --.. --- -. -.-.--", morseCode)).toBe("WILZON!")
    })

    it("Should return the correct translation of multiple codes", () => {
        expect(morseToEng(".... . .-.. .-.. --- / .-- --- .-. .-.. -..", morseCode)).toBe("HELLO WORLD")
        expect(morseToEng(".-- .... .- - .----. ... / ..- .--.", morseCode)).toBe("WHAT'S UP")
    })
})

describe("test to validate if english text can be translated to morse code", () => {
    it("Should return true if text is valid", () => {
        expect(isValidText("hello", morseCode)).toBe(true)
        expect(isValidText("h3ll0!", morseCode)).toBe(true)
    })

    it("Should return false if text is invalid", () => {
        expect(isValidText("<hello>", morseCode)).toBe(false)
        expect(isValidText("##hello**", morseCode)).toBe(false)
    })
})

describe("test to validate if morse code can be translated to english text", () => {
    it("Should return true if code is valid", () => {
        expect(isValidMorse(".... . .-.. .-.. ---", morseCode)).toBe(true)
    })

    it("Should return false if code is invalid", () => {
        expect(isValidMorse("...................... . .-.. .-.. ---", morseCode)).toBe(false)
    })
})