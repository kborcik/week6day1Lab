const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract

} = require('./functions.js')

describe('testing functions', ()=>{
    test('does returnTwo return the number 2',()=>{
       expect(returnTwo()).toBe(2) 
    
    })
    test('does greeting return hello + name', ()=>{
        expect(greeting('James')).toBe('Hello, James')
    })

    test('does add return the sum of two numbers', ()=>{
        expect(add(3,5)).toBe(8)
    })


    
})

describe('Math Functions', ()=>{
    test('does multiply return the product of two numbers', ()=>{
        expect(multiply(10,53)).toBe(530)
        expect(multiply(2,3)).toBe(6)
        expect(multiply('hello',2)).toBe('hellohello')
    })
    test('does divide return the quotient of two numbers', ()=>{
        expect(divide(22,11)).toBe(2)
        expect(divide(10,5)).toBe(2)
    })
    test('does subtract return the difference of two numbers', ()=>{
        expect(subtract(15,5)).toBe(10)
        expect(subtract(100,10)).toBe(90)
    })

})