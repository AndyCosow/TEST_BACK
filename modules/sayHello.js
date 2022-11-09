
module.exports = {
    count: (name) => {
        console.log(name.length)
    },
    firstLast: (name) => {
        console.log(name[0], name[name.length-1])
    },
    removeUpper: (text) => {
        let lower = ""
        for (let i = 0; i < text.length; i++) {
            if(text[i] !== text[i].toUpperCase()) lower += text[i]
        }
        console.log(lower)
    },
    multi: (arr) => {

        arr = arr.map(x => {
            if(typeof x === "number") {
                return x*2
            } else {
                return x
            }
        })

        console.log(arr)
    }
}

// create node.js module to have these methods:
// receives text, counts his length and console logs it
// takes first and last letter of the text and console logs it
// Removes all upperCase letters from text
// takes array with strings and numbers and multiplies numbers by two (does nothing to strings)