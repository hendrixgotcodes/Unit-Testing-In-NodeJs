const assert = require("assert")

describe('foo.js',()=>{
    
    context("some_function",()=>{
        before(() => {
            console.log("===========before")
        });

        after(() => {
            console.log("==========after")
        });

        beforeEach(() => {
            console.log("============before each")
        });
        
        it("should have fun", ()=>{
            assert.equal(1,1)
        })
        
        it("should learn",()=>{
            assert.deepEqual({name: "joe"}, {name: "joe"})
        })

        it("should be a pending test")
    })
    
})