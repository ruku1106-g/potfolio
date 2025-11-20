       // using objcet
const student = {
id :101, // this are properties
name : "Anu",
grade:7.8,
study : function (){ // this are behaviours
console.log(student.name +" study"); //  if u want to add the property to the behaviour
},
sleep : function (){
console.log("student sleep");
console.log(`student ${student.name} sleeps`) // template literals new ES6 feature
},
eat: function() {
    console.log("student eats");
}
}
console.log(student); //prints all the values of properties and behaviours as well if u dont want to print like an object format then u can do like the below one if u want individually
console.log("the student name is: " + student.name); // if u want to print individually then u can make use of this
student.study();
student.sleep();
student.eat(); 