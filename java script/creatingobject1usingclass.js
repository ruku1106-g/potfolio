// creatinf with class
class student {
    //constructor
   constructor(name,age){
    this.name=name; // this points to the current object
    this.age=age;
   }
    
    //behaviours : so in class it will already knows that we will be giving function ok na so we dont need to create a class
    study(){
        console.log(this.name,"student studies");//this is used to point ot current object
    }
     eat(){
        console.log(this.name,"student eats");
    }
     sleep(){
        console.log(this.name,"student sleeps");
    }
    
}
// now we need to create an object
// object creation in js
const s1 = new student("Anu",20); // calling the constructor and we pass the values here as the constructor aslo has the paramters
//execution starts from here like when it sees an new key word it creats an memeory in ram for student object and it loads all the properties and behaviorus to the ram 
// next it will give the refernce of the object as s1, as soon as object is created the constructor call happens with the parametrs it matches
//  and we pass name and age that will be assigned to the this which is the current objcet memory and the constructor come back to the object creating line and next it sees console.log(name); and it fetches all the detials from the ram memory

console.log(`this is:${s1.name}!`);
console.log(`this is:${s1.age}!`);
s1.study();
s1.eat();
s1.sleep();


// 2nd object creating
const s2 = new student("Ruk",22); // calling the constructor and we pass the values here as the constructor aslo has the paramters

console.log(`this is:${s2.name}!`);
console.log(`this is:${s2.age}!`);

s2.study();
s2.eat();
s2.sleep();