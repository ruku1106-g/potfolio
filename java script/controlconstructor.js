//if statement

let age = 20;
if (age>=18) {
    console.log("eligible to vote");
}
console.log("thank you");

//if-else 
    let num1 = -9;
if(num1>=0){
console.log("positive");
}
else {
    console.log("negative");
}
console.log("thank you");

//if-else ladder :
 
let num2=0;
if(num2>0){
console.log("positive");
}
else if(num2<0){
    console.log("negative");
}
else {
console.log("0");
}

// nested if:

let marks = 90;
if(marks>=40){
if(marks>=80){
    console.log("distinction");
}
else {
    console.log("pass");
}
}
else {
    console.log("fail");
}

// switch :
let grade = 'd';
switch (grade){
    case 'a':
        console.log("exc");
         break;
        case 'b':
        console.log("good");
         break;
        case 'c':
        console.log("avg");
         break;
        case 'd':
        console.log("poor");
         break;
         default:
            console.log("Invalid grade");
};

let month = 1;
switch (month) {
    case 3:
        case 4:
            case 5:
        console.log("Summer");
    break;
   case 11:
    case 12: 
    case 1:
        case 2:
   console.log("Winter");
   break;
 case 6:
    case 7:
        case 8:
            case 9:
                case 10:
                    console.log("rainy");
};

//for loop:
// print the 1st 10 natural numbers
for(let i=1;i<=10;i++){
    console.log(i);
}

//while loop
let i=1;
while (i<=5){
    console.log(i);
    i++;
}
// do while loop:
let x=1;
do {
    process.stdout.write((x*2)+" "); // print in a same line
    x++;
}
while(x<=5);

// //ATM machine: keep asking PIN until the user enters 1234;


// let pin;
// do{
//  pin=parseInt(prompt("enter pin:"));
// }
// while(pin!==1234);
// document.writeln("pin correct"); this wont work here u see in controlconstructor.html
// and all the pop ups work on html not js

console.log("");

//for-of loop only in js- print all fruits in a basket
let fruits=["apple","banana","cherry"];
console.log(fruits); // here we get the o/p in array form 
for(let fruit of fruits){ // this will read one by one array elements and store it in fruit
    console.log(fruit); // if u see of in the for then its array, u dont give any thing like initialize, increment and all
}

// for-in loop only in js- print all student details from an object
let student = {name:"john",age:20,grade:"A"}; //object is created in key and value pair always
console.log(student); // we are getting like in objcet only 
for(let key in student){
    console.log(key + ": " +student[key]); // if u want to store it like key and value pair we use in in for loop for objects
    console.log(key);
    console.log(student.name);
    console.log(student.age);
    console.log(student.grade);
}

//foreach loop: print the squares of all the numbers in an array

let numbers =[1,2,3,4,5];
numbers.forEach(num =>console.log(num *num));
// so here we are use forEach to each element in an  array to do the task and using an arraow function for 
// doing the console.log which is squareing the number

// break statemnet- stop printing when num is 3 
for(let i=1;i<=5;i++){
    if(i==3){
        break;
    }
    console.log(i);
}


//continue: skip the num when its 3 
for(let i=1;i<=5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}

add();
function add(){
let a=10;
let b=20;
console.log(a+b);
}