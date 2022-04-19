const chai = require("chai")
const expect = chai.expect
const demo = require("./demo")
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)


describe('demo', () => {
    context('add', () => {
        it('should add two numbers', () => {
            expect(demo.add(1, 2)).to.equal(3)
        });        
    });
    
    context('callback_add', () => {
        it('should test the callback', (done) => {
            demo.addCallback(4,8, (err, res)=>{
                expect(err).to.not.exist
                expect(res).to.equal(12)
                done()
            })            
        });        
    });

    context('test promis', ()=>{
        it('should add with a promise cb', (done) => {
            demo.addPromise(1,2)
            .then((res)=>{
                expect(res).to.equal(3)
                done()
            })
            .catch((e)=>{
                console.log('some error occurred')
                done(e)
            })
            
        });

        it('should test a promise with a return', () => {
            return demo.addPromise(1,2)
                .then((res)=>{
                    expect(res).to.equal(3)
                })
            
        }); 

        it('should test promise with async-await', async()=>{
            const res = await demo.addPromise(1,2)
            expect(res).to.equal(3)
        })

        it('should test promise with chai-as-promised', async()=>{
            await expect(demo.addPromise(1,3)).to.eventually.equal(3)
        })


    })
});