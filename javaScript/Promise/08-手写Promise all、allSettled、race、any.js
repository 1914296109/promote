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
                    this.onrejectedList.forEach(fn => {
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

            if (this.status === PENDING) {
                this.onfulfilledList.push(() => {
                    throwError(onfulfilled, this.value, resolve, reject)
                })
                this.onrejectedList.push(() => {
                    throwError(onrejected, this.reason, resolve, reject)
                })
            }
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

    // 所有resolve结束后返回,如果有reject 直接返回 reject
    static all(promises) {
        return new LowriePromise((resolve, reject) => {
            const valuses = []
            promises.forEach(item => {
                item.then(res => {
                    valuses.push(res)
                    if (valuses.length === promises.length) {
                        resolve(valuses)
                    }
                }, err => {
                    valuses.push(err, 1)
                    reject(err)
                })
            })
        })
    }

    static allSettled(promises) {
        return new LowriePromise((resolve, reject) => {
            const valuses = []
            promises.forEach(item => {
                item.then(res => {
                    valuses.push({ status: FULFILLED, value: res })
                    if (valuses.length === promises.length) {
                        resolve(valuses)
                    }
                }, err => {
                    valuses.push({ status: REJECTED, value: err })
                    if (valuses.length === promises.length) {
                        reject(valuses)
                    }
                })
            })
        })
    }

    static race(promises) {
        return new LowriePromise((resolve, reject) => {
            promises.forEach(item => {
                // item.then(res => {
                //     resolve(res)
                // }, err => {
                //     reject(err)
                // })
                item.then(resolve, reject)
            })
        })
    }

    static any(promises) {
        return new LowriePromise((resolve, reject) => {
            const reasons = []
            promises.forEach(item => {
                item.then(res => {
                    resolve(res)
                }, err => {
                    reasons.push(err)
                    if (reasons.length === promises.length) {
                        reject(reasons)
                    }
                })
            })
        })
    }
}

p1 = new LowriePromise((resolve, reject) => {
    setTimeout(() => { reject(111) }, 3000);
})

p2 = new LowriePromise((resolve, reject) => {
    setTimeout(() => { reject(222) }, 2000);
})

p3 = new LowriePromise((resolve, reject) => {
    setTimeout(() => { reject(333) }, 3000);
})

// LowriePromise.all([p1, p2, p3]).then(res => {
//     console.log(res);
// }, err => {
//     console.log(err);
// })

// LowriePromise.allSettled([p1, p2, p3]).then(res => {
//     console.log(res);
// }, err => {
//     console.log(err);
// })

// LowriePromise.race([p1, p2, p3]).then(res => {
//     console.log('res', res);
// }, err => {
//     console.log('err', err);
// })

LowriePromise.any([p1, p2, p3]).then(res => {
    console.log('res', res);
}, err => {
    console.log('err', err);
})