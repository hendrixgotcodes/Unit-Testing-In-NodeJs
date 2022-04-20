const chai = require("chai")
const expect = chai.expect
const demo = require("./demo")
const chaiAsPromised = require('chai-as-promised')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(chaiAsPromised)
chai.use(sinonChai)



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
            await expect(demo.addPromise(1,3)).to.eventually.equal(4)
        })


    })

    context('test doubles', () => {
        it('spy on log', () => {
            const spy = sinon.spy(console, 'log')
            demo.foo()

            expect(spy.calledOnce).to.be.true            
            expect(spy).to.have.been.calledOnce
            spy.restore()
        });

        it('should stub console.warn', ()=>{
            const stub = sinon.stub(console, 'warn').callsFake(()=>console.log('message from stub'))
            
            demo.foo()

            // next line triggers an error to see of console.warn was really called but stubbed
            // expect(stub).to.have.been.calledWith('====console.warn was called====')

        })
        
    });
    
});