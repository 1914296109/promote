function fn() {}

let obj = {
  name: "1",
  age: 1,
};
let test = Object.keys(obj);
console.log(test);

let demo = document.querySelector(".demo")
let demoList = document.querySelectorAll(".demo")
console.log(demo);
console.log(demoList);
console.log(Array.prototype.slice.call(demoList,0));
