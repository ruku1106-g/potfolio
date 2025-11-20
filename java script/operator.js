let a =10;
let b =5;
document.writeln("Arithmetic operator");
document.writeln("<br>");
document.writeln(a+b); //15
document.writeln("<br>");
document.writeln(a-b); //5
document.writeln("<br>");
document.writeln(a*b); //50
document.writeln("<br>");
document.writeln(a/b); //2
document.writeln("<br>");
document.writeln(a%b); //0
document.writeln("<br>");
document.writeln(a**b); //100000
document.writeln("<br>");

let x=5;
document.writeln(x++); // 5
document.writeln(x); //6
document.writeln("<br>");

let y=4;
document.writeln(y--); //4
document.writeln(y);//3
document.writeln("<br>");
document.writeln("<br>");

document.writeln("Assignment operators");

let c =5;
document.writeln(c); // 5
document.writeln("<br>"); 
document.writeln(c+=3); // 8
document.writeln("<br>");
document.writeln(c-=3); // 5
document.writeln("<br>");
document.writeln(c*=3); // 15
document.writeln("<br>");
document.writeln(c/=3); // 5
document.writeln("<br>");
document.writeln(c%=3); // 2
document.writeln("<br>");
document.writeln("<br>");

document.writeln("Relational operators");

let m =5;
let n ="5";
let o = "5";
document.writeln(m==n); //true
document.writeln("<br>");
document.writeln(m===n); //false
document.writeln("<br>");
document.writeln(m!=o); //false
document.writeln("<br>");
document.writeln(m!==o);  //true
document.writeln("<br>");
document.writeln(m<o);   //false
document.writeln("<br>");
document.writeln(m<=o);  //true
document.writeln("<br>");
document.writeln(m>o); //false
document.writeln("<br>");
document.writeln(m>=o);  //true
document.writeln("<br>");
document.writeln("<br>");

document.writeln("Logical operators");
document.writeln("<br>");
let age =8;
document.writeln(age>18 && age <30); // false
document.writeln("<br>");
document.writeln(age<18 || age >30); // true
document.writeln("<br>");
document.writeln("<br>");

document.writeln("Ternary opearyors");
document.writeln("<br>");
let canVote = (age>=18) ? "Yes" : "No"; 
document.writeln(canVote); // No

document.writeln("<br>");

let num = 16;
let res = (num%2==0) ? "Even" : "Odd";
document.writeln(res); // Even

document.writeln("<br>");
 
//Assignment - find the largest of 3 numbers
let d=40;
let e=50;
let f=60;

document.writeln((d>e && d>f) ? d : (e>f ?e: f)); //f
document.writeln("<br>");
document.writeln("<br>");


document.writeln("Type Opeartors");
document.writeln("<br>");

let p =10;
document.writeln(p); //10
document.writeln(typeof(p)); //number
document.writeln("<br>");

let q ="Hello";
document.writeln(q); //hello
document.writeln(typeof(q)); // String
document.writeln("<br>");

let r =true;
document.writeln(r);
document.writeln(typeof(r));
document.writeln("<br>");

document.writeln(typeof "Hello"); //string
document.writeln("<br>");
document.writeln(typeof "true"); //string
document.writeln("<br>");
document.writeln(typeof true); //BOOLEAN
document.writeln("<br>");
document.writeln(typeof 23); //number
document.writeln("<br>");
document.writeln([1,2,3]instanceof Array); // true
// checks wether the array to the instance of array

document.writeln([1,2,3]instanceof object); // true because array belongs to object

document.writeln([1,2,3]instanceof String); // false