import React from 'react'

export default function RemoveRepetitive({ string }) {
    let result = [];
    let temp = "";

    Object.keys(string).map(index => {
        if (string[index] !== temp) {
            temp = string[index]
            result[index] = string[index]
        }


        return result;
    })


    // console.log(string.replace(/(.)(?=.*\1)/g, "")); // remove All duplicate characters


    console.log('[change characters in App.js] |', JSON.stringify(result.filter(n => n).join('')))
    return (<h3>4. {string}: {result}</h3>);
}
