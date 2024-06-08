const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1) //CAPITALIZE STRING FUNCTION

const reverseString = (string) => string.split('').reverse().join('') //FUNCTION TO REVERSE A STRING

const calculator = { //CALCULATE ADD, SUBSTRACT, DEVIDE, MULTIPLY
    add : (a, b) => a + b,
    subtract: (a, b) => a - b,
    devide: (a, b) => a / b,
    multiply: (a, b) => a * b
}

const analyzeArray = (arr) => { //ANALYZE ARRAY
    return{
        average: arr.reduce((sum, curr) => sum += curr , 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }

}

const fetchPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter')
        }, 1000)

    })
}
export { capitalize, reverseString, calculator, analyzeArray, fetchPromise }