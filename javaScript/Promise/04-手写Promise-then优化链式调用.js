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
}

let p = new LowriePromise((resolve, reject) => {
    throw new Error('err message')
    // resolve(1)
    // reject(2)
})

p.then(
    res => {
        console.log('res1', res);
        return 'aaaa'
        throw new Error('哈哈哈')
    },
    err => {
        console.log('err1', err);
        return 'bbbb'
        throw new Error('嘻嘻嘻')
    }).then(
        res => {
            console.log('res2', res);
        },
        err => {
            console.log('err2', err);
        }
    )

// p.then(
//     res => {
//         console.log(res, 2);
//     },
//     err => {
//         console.log(err);
//     })

// // 优化 当延时调用then的时候，可以直接从完成状态取值 返回
// setTimeout(() => {
//     p.then(
//         res => {
//             console.log(res, 3);
//         },
//         err => {
//             console.log(err);
//         })
// }, 1000);



// new Promise().then()