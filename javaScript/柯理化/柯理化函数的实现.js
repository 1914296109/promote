/**
 * 柯理化函数实现
 **/ 

function add1 (x,y,z) {
    console.log(x + y + z);
    return x + y + z
}

function hyCurrying (fn) {
    function curried (...args) {
        // 判断当前函数接收到的参数个数,与参数本身需要的参数个数是否一致了
        // 当我们已经传入的参数 大于等于 需要的参数时,就执行函数
        if (args.length >= fn.length) {
            return fn.apply(this,args)
        } else {
            // 没有达到个数时,需要返回一个新的函数,继续来接收的参数
            function curried2(...args2) {
                // 接收到参数后,递归调用curried 来检查函数个数是否达到 
                return curried.apply(this, [...args,...args2])
            }
            return curried2
        }

    }
    return curried
}

var curryAdd = hyCurrying(add1)

curryAdd(10,20,30)
curryAdd(10,20)(30)
curryAdd(10)(20)(30)