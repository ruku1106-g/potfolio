//prmitive datatypes
var a =10;
var a = 10.78; //number itself not float double and all
console.log(a);
console.log(typeof(a));//number

var b ="hello";
var b ='hello';
var b =`hello`;
console.log(b);
console.log(typeof(b));//string

var c= true; //true/flase
console.log(c);
console.log(typeof(c));

var d = 10/0;
console.log(d); //infinity

var d = 0/10;
console.log(d); // 0

var e;
console.log(e); //undefined
console.log(typeof(e)); //undefined , when we declare and not initalize
//console.log(x); // reference error, not-defined when we dont declare

var z=null; // when u want a value as null
console.log(z);
console.log(typeof(z)); //object in js everything is treated as object

// complex

//functions 

function greet() {
    console.log("Hello Maam");
}
greet();

//Array: for collection of data
let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(numbers[2]);


//object: stores in key value pairs
let person = {
    id:101,
    name:'rukmini',
    age:22
}

console.log(person); // to fetch everything
console.log(person.age); // to fetch individual