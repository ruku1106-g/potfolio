//constructores
class student1 {
    //properties
    id;
    name;
    grade;
    institue="kodnest";
    
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