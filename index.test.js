import { capitalize, reverseString, calculator, analyzeArray } from "./index.js";

//TEST CAPITALIZE FUNCTION
it('Capitalized => hello - Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
})

//TEST REVERSE FUNCTION
it('Reversed => hello - olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
})

//TEST CALCULATOR FUNCTIONS
it('Calculate => 6 + 3 = 9', () => {
    expect(calculator.add(6,3)).toBe(9);
})

it('Calculate => 6 - 3 = 3', () => {
    expect(calculator.subtract(6,3)).toBe(3);
})

it('Calculate => 6 / 3 = 2', () => {
    expect(calculator.devide(6,3)).toBe(2);
})

it('Calculate => 6 * 3 = 18', () => {
    expect(calculator.multiply(6,3)).toBe(18);
})

//TEST ANALYZE FUNCTION
it('Analyze => array [1,8,3,4,2,6] - { average: 4, min: 1, max: 8, length: 6}', () => {
    expect( analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    );
})


