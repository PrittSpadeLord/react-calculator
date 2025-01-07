import { describe, it, expect } from 'vitest';
import { formatText, evaluateText } from '../src/App'

describe('formatText', () => {
    //with how the function is implemented, it is impossible to add spaces to the input text, so we dont have to worry about that

    it('should return the string as is if no plus/minus/multiply/divide', () => {
        expect(formatText('hello world!')).toBe('hello world!')
    })

    it('should pad plus with spaces if plus is present', () => {
        expect(formatText('hello+world!')).toBe('hello + world!')
    })

    it('should pad minus with spaces if minus is present', () => {
        expect(formatText('3−2')).toBe('3 − 2')
    })

    it('should pad times with spaces if times is present', () => {
        expect(formatText('8×4')).toBe('8 × 4')
    })

    it('should pad divide with spaces if divide is present', () => {
        expect(formatText('355÷113')).toBe('355 ÷ 113')
    })

    it('should pad equals with space on the right side if equals is present', () => {
        expect(formatText('=1729')).toBe('= 1729')
    })

    it('should not pad spaces next to parenthesis unless one of the other keys are present', () => {
        expect(formatText('3+(4×5)')).toBe('3 + (4 × 5)')
    })
})

// describe('evaluateText', () => {
    
// })