//using normal way
let color = ["pink","black","red"];
console.log(color);

//using contructor
let odd = [1,3,5,7,9];
console.log(odd);

// and in js arrays is an heterogenous which is same data type
let even =[2,4,"six",8.0];
console.log(even);
console.log(even[1]);
console.log(even[5]);

var fruits = ["apple","banana","cherry"]; //declaring an array
//or using contrutors as well
var fruits = new Array("apple","banana","cherry");
console.log(fruits);

//array operations,adding,removing and accessing


// adding

//push : used to add the values to the end
var numbers =[1,2,3];
numbers.push(4); // adds 4 to the end
console.log(numbers); 

// unshift: used to add the values in the beginning
var numbers =[1,2,3];
numbers.unshift(0); // adds 0 to the start
console.log(numbers); 


//removing

//pop: used to remove last element
var fruits = ["apple","banana","cherry"];
fruits.pop(); //removes last element
console.log(fruits);

var fruits = ["apple","banana","cherry"];
fruits.shift(); //removes first element
console.log(fruits);

// modifying and accessing

// access by index

var colors = ["red", "green","blue"];
console.log(colors[1]); //green

//splice() :is used to addng,removing or replacing elements in an array
//(strat,deletecount,items to be added multiple)

var colors = ["red", "green","yellow","pink"];
colors.splice(1,2,"blue");// here 1 is start index, and 2 is no of count to delete and " blue" is to add
console.log(colors);

//slice():is used to return the copy of the portion of an array without modifying the original part

var numbers =[1,2,3,4,5];
let part = numbers.slice(1,3); // extracts from index 1 to index 3 (exclusive)
console.log(part);

// array searching  and sorting
//indexOf(): return the 1st index of a specified element or -1 if not found

var fruits = ["apple","banana","cherry"];
console.log(fruits.indexOf("cherry")); //2

//includes(): chceks if the elment is present or not in the array
var fruits = ["apple","banana","cherry"];
console.log(fruits.includes("apple")); //true

//sort():sorts elements in place as string by defalut
var letters =["b","a","c"];
console.log(letters.sort());

//reverse():revers a set of elemts in an array
var numbers =[1,2,3,4,5];
console.log(numbers.reverse());

//array iteration methods

//forEach():

//combining
//concat():

let arr1 =[1,2];
let arr2 = [3,4];
console.log(arr1.concat(arr2));

// join():
let words = ["hello","world"];
console.log(words.join(" "));

// array destructing
