function getData(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val)
        }, 1000);
    })
}

// getData('a').then(res => {
//     console.log(res);
// })

function* fn() {
    const a = yield getData('why')
    const b = yield getData(a + 'a')
    const c = yield getData(b + 'b')
    console.log(c);
}

// const generator = fn()

// generator.next().value.then(res => {
//     generator.next(res).value.then(res => {
//         generator.next(res).value.then(res => {
//             console.log(res);
//         })
//     })
// })

function execGenerator(genFn) {
    const generator = genFn()
    function exec(res) {
        const result = generator.next(res)
        if (result.done) {
            return result.value
        }
        result.value.then(res => {
            exec(res)
        })
    }
    exec()
}

execGenerator(fn)
