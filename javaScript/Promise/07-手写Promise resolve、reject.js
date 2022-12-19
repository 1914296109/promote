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
        onfulfilled = onfulfilled || ((val) => { return val })
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
        return this.then(undefined, onrejected)
    }

    finally(onFinally) {
        this.then(
            () => {
                onFinally()
            }, () => {
                onFinally()
            }
        )
    }

    static resolve(val) {
        return new LowriePromise(resolve => {
            resolve(val)
        })
    }

    static reject(reason) {
        return new LowriePromise((resolve, reject) => {
            reject(reason)
        })
    }
}

LowriePromise.resolve('1111').then(res => {
    console.log(res);
})

LowriePromise.reject('2222').catch(err => {
    console.log(err);
})



