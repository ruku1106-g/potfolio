//function declaration
function square (num) {
let res = num* num;
return res;
}
console.log(square(4));
console.log(square(6));

//function expression
let square1=function (num) {
let res = num* num;
return res;
}
console.log(square1(4));

//arrow function

let square2 = (num)=>num *num
console.log(square2(4));

let greet = () =>console.log("hello All");
greet();

let greet1 = (name) =>console.log("hello " + name);
greet1("rukmini");

// write a program to add 2 nos

let add =(num1,num2)=> num1+num2;
console.log(add(4,5));

//or
let add1 =(num1,num2)=> {
    let c = num1+num2;
console.log(c);
}
add1(4,5);
