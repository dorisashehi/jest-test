import { capitalize, reverseString, calculator, analyzeArray, fetchPromise } from "./index.js";

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

//TEST A PROMISE FUNCTION
it('Test promise', () => {
    expect(fetchPromise()).resolves.toBe('peanut butter');
})

// it('Test promise', () => {
//     expect(fetchPromise()).rejects.toThrow('error');
// })


//TEST WITH ASYNC AWAIT
it('Test await', async () => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
})

const mockCallback = jest.fn(x => 42 + x);
mockCallback(0);
mockCallback(1);

it('Mock implementation', () => {
    const mock  = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1);
})