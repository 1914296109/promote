const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function throwError(fn, val, resolve, reject) {
    try {
        resolve(fn(val))
    } catch (error) {
        reject(error)
    }
}

class LowriePromise {
    constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        this.onfulfilledList = []
        this.onrejectedList = []
        const resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = value
                queueMicrotask(() => {
                    this.onfulfilledList.forEach(fn => {
                        fn(this.value)
                    })
                });
            }
        }

        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                queueMicrotask(() => {
                    this.onfulfilledList.forEach(fn => {
                        fn(this.reason)
                    })
                });
            }
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onfulfilled, onrejected) {
        onrejected = onrejected || ((err) => { throw err })
        return new LowriePromise((resolve, reject) => {
            if (this.status === FULFILLED && onfulfilled) {
                throwError(onfulfilled, this.value, resolve, reject)
            }
            if (this.status === REJECTED && onrejected) {
                throwError(onrejected, this.reason, resolve, reject)
            }

            // if (this.status === PENDING) {
            //     this.onfulfilledList.push(() => {
            //         throwError(onfulfilled, this.value, resolve, reject)
            //     })
            //     this.onrejectedList.push(() => {
            //         throwError(onrejected, this.value, resolve, reject)
            //     })
            // }
        })
    }

    catch(onrejected) {
        this.then(undefined, onrejected)
    }
}

let p = new LowriePromise((resolve, reject) => {
    // throw new Error('err message')
    // resolve(1)
    reject(2)
})

p.then(
    res => {
        console.log('res1', res);
        return 'aaaa'
        // throw new Error('哈哈哈')
    }).catch(
        err => {
            console.log('err1', err);
        }
    )
