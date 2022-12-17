const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class LowriePromise {
    constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        const resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = value
                queueMicrotask(() => {
                    this.onfulfilled(value)
                });
            }
        }

        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                queueMicrotask(() => {
                    this.onrejected(reason)
                });
            }
        }
        executor(resolve, reject)
    }
    then(onfulfilled, onrejected) {
        this.onfulfilled = onfulfilled
        this.onrejected = onrejected
    }
}

let p = new LowriePromise((resolve, reject) => {
    resolve(11)
    reject(22)
})

p.then(
    res => {
        console.log(res);
    },
    err => {
        console.log(err);
    })



// new Promise().then()