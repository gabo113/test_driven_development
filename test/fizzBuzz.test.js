import { describe, expect, it, should } from 'vitest'
import { fizzBuzz } from '../src/fizzBuzz.js'



describe('fizzBuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzBuzz).toBe('function')
    })

    it('should throw if not a number is provided as a parameter', () => {
        expect( () => fizzBuzz()).toThrow()
    })

    it('should throw specific error if not number is provided as parameter', () => {
        expect(() => fizzBuzz ()).toThrow(/number/)
    })

    it('should throw specific error if not a number is provided', () => {
        expect(() => fizzBuzz (NaN)).toThrow('parameter provided must be a number')
    })

    it('should return 1 if number provided is 1', () => {
        expect(fizzBuzz(1)).toBe(1)
    })

    it('should return 2 if number provided is 2', () => {
        expect(fizzBuzz(2)).toBe(2)
    })

    it('should return "fizz" if number provided is multiple of 3', () => {
        expect(fizzBuzz(6)).toBe('fizz')
        expect(fizzBuzz(9)).toBe('fizz')
        expect(fizzBuzz(12)).toBe('fizz')
    })

    it('should return 4 if nember provided is 4', () => {
        expect(fizzBuzz(4)).toBe(4)
    })
    it('should return "buzz" if number provided is multiple of 5', () => {
        expect(fizzBuzz(5)).toBe('buzz')
        expect(fizzBuzz(10)).toBe('buzz')
    })

    it('should return "fizzbuzz" if number provided is multiple of 15', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz')
    })
    
})