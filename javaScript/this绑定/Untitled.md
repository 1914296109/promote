### this绑定

***

##### 1.默认绑定

* 单独调用函数的时候会默认给this绑定windows

* 所有此时this指向windows

  ``` javascript
  function fn() {
      console.log(this)  
  }
  fn() // windows
  ```

##### 2.隐式绑定

* 当通过某个对象去调用函数的时候

* this会指向当前对象

  ```javascript
  let obj = {
      name: 'dabai',
      eat: function () {
          consoel.log(this)
      }
  }
  fn() // obj
  ```

##### 3.显示绑定

* 通过call、apply、bind 强制绑定

  ```javascript
  function fn () {
      console.log(this)
  }
  fn().call('123')  //123  强制绑定后不可以再进行绑定
  
  var a = fn().bind('456')
  a()  // 456
  ```

##### 4.new绑定

*  使用new来调用函数，或者创建构造函数时

* 这个新对象会绑定到函数调用的this

  ```javascript
  function fn (val) {
      var a = val
  }
  var bar = new fn(666)
  console.log(bar.a)   // 666 
  ```

  