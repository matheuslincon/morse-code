import {engToMorse, morseToEng} from './translator.js'
import { morseCode } from './morseCode.js'

describe("test to the translation funcitons", () => {
    it("Should return the correct translation", () => {
        expect(engToMorse("hello", morseCode)).toBe(".... . .-.. .-.. ---")
        expect(morseToEng(".... . .-.. .-.. ---", morseCode)).toBe("HELLO")
    })
})