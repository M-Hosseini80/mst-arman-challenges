import React from 'react'

export default function Operations({ ops }) {
    let result = []
    let temp;
    ops.split(" ").map((str, index) => {
        if (!isNaN(str)) {
            result.push(str)
            console.log(result)
        } else if (str === 'D') {
            temp = result.slice(-1) * 2
            result.push(String(temp))
            console.log(result)
        }
        else if (str === '+') {
            temp = parseInt(result.slice(-1)) + parseInt(result.slice(-2, -1))
            result.push(String(temp))
            console.log(result)
        }
        else if (str === 'R') {
            result.splice(-1)
            console.log(result)
        }
        return result;
    })
    // console.log(result)

    result = JSON.stringify(result)
    // console.log('5: [change characters in App.js] |', result)
    return (<h3>5. : {result}</h3>);
}
