export default function IsBalance({ input }) {
    var result = true

    // our balance symbols 
    const inputPatterns = ({
        '[': ']',
        '(': ')',
        '{': '}',
    });

    // check each character of input
    input.split("").forEach(char => (

        // check equality of input symbols with each character  of input
        Object.keys(inputPatterns).map(
            (firstSyllable) => {
                if (char === firstSyllable || char === inputPatterns[firstSyllable]) {
                    if (input.split(char).length - 1 !== input.split(inputPatterns[firstSyllable]).length - 1) {
                        result = false
                    }
                }
                return result;


            }

        )
    ))

    result ? result = "characters are Balance ✅" : result = "characters are NOT Balance ❌"
    console.log('[change characters in App.js] |', result)
    return (<h3>1. {result}</h3>);
}

