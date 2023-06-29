import {engToMorse, morseToEng} from './translator/translator.js'
import { morseCode } from './translator/morseCode.js'

const engText = document.getElementById("engInput");
const morseText = document.getElementById("morseInput");

const engTransButton = document.getElementById("engButton");
const morseTransButton = document.getElementById("morseButton");
const engClearButton = document.getElementById("engClear");
const morseClearButton = document.getElementById("morseClear");




engTransButton.addEventListener('click', () => {
    try{
        morseText.value = engToMorse(engText.value, morseCode)
    } catch(e) {
        morseText.value = e.message
    }
})

morseTransButton.addEventListener('click', () => {
    try{
        engText.value = morseToEng(morseText.value, morseCode)
    } catch(e) {
        engText.value = e.message
    }
})

engClearButton.addEventListener('click', () => {
    engText.value = ""
    morseText.value = ""
})

morseClearButton.addEventListener('click', () => {
    engText.value = ""
    morseText.value = ""
})