const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

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
        executor(resolve, reject)
    }
    then(onfulfilled, onrejected) {
        if (this.status === FULFILLED && onfulfilled) {
            onfulfilled(this.value)
        }
        if (this.status === REJECTED && onrejected) {
            onfulfilled(this.reason)
        }

        if (this.status === PENDING) {
            this.onfulfilledList.push(onfulfilled)
            this.onrejectedList.push(onrejected)
        }
    }
}

let p = new LowriePromise((resolve, reject) => {
    resolve(11)
    reject(22)
})

p.then(
    res => {
        console.log(res, 1);
    },
    err => {
        console.log(err);
    })

p.then(
    res => {
        console.log(res, 2);
    },
    err => {
        console.log(err);
    })

// 优化 当延时调用then的时候，可以直接从完成状态取值 返回
setTimeout(() => {
    p.then(
        res => {
            console.log(res, 3);
        },
        err => {
            console.log(err);
        })
}, 1000);
