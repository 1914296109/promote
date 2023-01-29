function* fn() {
    console.log('开始啦');
    const val1 = 1
    yield val1


    const val2 = 2
    const n = yield val2


    const val3 = 3
    yield val3 + n

    console.log('结束啦');
}

const generator = fn()

console.log(generator.next());
console.log(generator.next());
console.log(generator.next(1));
console.log(generator.next());