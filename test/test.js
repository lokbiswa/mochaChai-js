const assert = require('chai').assert
const firstName = require('../index').firstName;
const addNumber = require('../index').addNumber;

describe('App', function(){
    describe('App', function(){
        it('firstName should return string', function(){
            let result = firstName("Lok")
            assert.equal(typeof result, 'string')
        })
        it('firstName should return string', function(){
            let result = firstName("Lok")
            assert.isAbove(result.length, 2)
        })
    })
    describe('addNumber', function(){
        it('addNumber should return value greater then 5', function(){
            let result = addNumber(5,3)
            assert.isAbove(result, 5);
        })
    })
})