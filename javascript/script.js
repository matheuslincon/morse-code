import {engToMorse, morseToEng} from './translator/translator.js'
import { morseCode } from './translator/morseCode.js'

const engText = document.getElementById("engInput");
const morseText = document.getElementById("morseInput");

const engTransButton = document.getElementById("engButton");
const morseTransButton = document.getElementById("morseButton");
const engClearButton = document.getElementById("engClear");
const morseClearButton = document.getElementById("morseClear");




engTransButton.addEventListener('click', (e) => {
    e.preventDefault();
    morseText.value = engToMorse(engText.value, morseCode)
})

morseTransButton.addEventListener('click', (e) => {
    e.preventDefault();

    engText.value = morseToEng(morseText.value, morseCode)
})

engClearButton.addEventListener('click', (e) => {
    e.preventDefault();
    engText.value = ""
    morseText.value = ""
})

morseClearButton.addEventListener('click', (e) => {
    e.preventDefault();
    engText.value = ""
    morseText.value = ""
})