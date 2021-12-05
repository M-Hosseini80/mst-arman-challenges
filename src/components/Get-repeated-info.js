import React from 'react'

export default function GetRepeatedInfo({ number }) {
    let result = {}
    // check numbers
    number.split("").map((eachNum) => {
        result[eachNum] = ""

        // if we have repeated numbers 
        if (number.split(eachNum).length - 1 <= 1) {
            for (var x = 0; x < eachNum; x++) {
                result[eachNum] += String(eachNum);
            }
        } else {
            for (var i = 0; i <= eachNum * number.split(eachNum).length - 1 - eachNum; i++) {
                result[eachNum] += String(eachNum);
            }
        }
        return result;

    });
    result = JSON.stringify(result)
    console.log('[change numbers in App.js] |', result)
    return (<h3>2. {result}</h3>);
}
