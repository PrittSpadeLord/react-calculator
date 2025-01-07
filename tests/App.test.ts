import { describe, it, expect } from 'vitest';
import { formatExpression, appendSymbol, evaluateExpression } from '../src/App'

describe('formatExpression', () => {
    //with how the function is implemented, it is impossible to add spaces to the input text, so we dont have to worry about that

    it('should return the string as is if no plus/minus/multiply/divide', () => {
        expect(formatExpression('hello world!')).toBe('hello world!')
    })

    it('should pad plus with spaces if plus is present', () => {
        expect(formatExpression('hello+world!')).toBe('hello + world!')
    })

    it('should pad minus with spaces if minus is present', () => {
        expect(formatExpression('3-2')).toBe('3 − 2')
    })

    it('should pad times with spaces if times is present', () => {
        expect(formatExpression('8*4')).toBe('8 × 4')
    })

    it('should pad divide with spaces if divide is present', () => {
        expect(formatExpression('355/113')).toBe('355 ÷ 113')
    })

    it('should pad equals with space on the right side if equals is present', () => {
        expect(formatExpression('=1729')).toBe('= 1729')
    })

    it('should not pad spaces next to parenthesis unless one of the other keys are present', () => {
        expect(formatExpression('3+(4*5)')).toBe('3 + (4 × 5)')
    })
})

describe('appendSymbol', () => {
    it('should add symbol if no Error is detected', () => {
        expect(appendSymbol('3', '+')).toBe('3+')
    })

    it('erase everything and only add symbol if Error is detected', () => {
        expect(appendSymbol('lalalaErrorlala', '8')).toBe('8')
    })
})

describe('evaluateExpression', () => {
    it('should perform integer arithmetic correctly', () => {
        expect(evaluateExpression('3+(4*2)')).toBe('11')
    })

    it('should limit output of infinite decimal to 13 total characters', () => {
        expect(evaluateExpression('355/113')).toBe('3.14159292035')
    })

    it('should not have any floating point rounding errors', () => {
        expect(evaluateExpression('0.1+0.2')).toBe('0.3')
    })

    it('should return Error if division by zero is performed anywhere', () => {
        expect(evaluateExpression('(8+9)/0')).toBe('Error')
    })
})