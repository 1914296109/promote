const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class LowriePromise {
    constructor(executor) {
        this.status = PENDING
        const resolve = () => {
            if (this.status === PENDING) {
                this.status = FULFILLED
                console.log('resolve');
            }
        }

        const reject = () => {
            if (this.status === PENDING) {
                this.status = REJECTED
                console.log('reject');
            }
        }
        executor(resolve, reject)
    }
}

// new Promise()
let p = new LowriePromise((resolve, reject) => {
    resolve()
    reject()
})