import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

it("should change numeric string values to number of type number", () => {
    const number = '2'

    const result = transformToNumber(number)

    expect(result).toBeTypeOf('number')
});

it('should not transform a string that is not numeric', () => {
    const input = 'invalid'

    const result = transformToNumber(input)

    expect(result).toBeNaN()
})