import { sumNumbers } from './ListPage'

describe('Sum numbers: ', () => {
    test('Sum two negative numbers', () => {
        const result = sumNumbers(-1, -2)
        const expectedResult = 3
        expect(result).toEqual(expectedResult)
    })

    test('Sum two positive numbers', () => {
        const result = sumNumbers(3, 5)
        const expectedResult = 8
        expect(result).toEqual(expectedResult)
    })

    test('Sum two zero values', () => {
        const result = sumNumbers(0, 0)
        const expectedResult = 0
        expect(result).toEqual(expectedResult)
    })
})