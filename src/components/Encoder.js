import React from 'react'

export default function Encoder({ inputString, repeatCount }) {
    let result = "";
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // move last character of inputString to the first
    let firstStep = inputString.slice(-1) + inputString.slice(0, -1)

    // change result characters to next alphabet character of them
    Object.keys(firstStep).map((index) => {

        let alphabetChar = alphabet.indexOf(firstStep[index])
        let nextAlphabet;
        alphabetChar !== 25 ? nextAlphabet = parseInt(alphabetChar) + parseInt(repeatCount) : nextAlphabet = 0 + repeatCount - 1
        result += alphabet[nextAlphabet]
        // console.log('char: ', result[index], 'position of input in alphabet: ', alphabetChar, 'alphabet character: ', alphabet[alphabetChar], 'next alphabet char: ', alphabet[nextAlphabet])
        return result;
    })

    console.log('[change characters and counts in App.js] |', result)
    return (<h3>3. your encoded char: {result}</h3>);
}
