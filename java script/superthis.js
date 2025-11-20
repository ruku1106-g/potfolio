//parent class
class animal {
    constructor(name){
        this.name=name; // this refers to animal 
    }
        speak() {
          console.log(`${this.name}makes a sound`);
        }
    }
    
    //child class
    class dog extends animal {
        constructor(name,breed) {
            super(name); // calls parent constructor(animal)
            this.breed = breed;//'this' refers to dog itself
        }
        speak() {
            super.speak();// calls animal speak()
            console.log(`${this.name}barks`);
        }
        showdetails() {
            console.log(`name: ${this.name}, breed: ${this.breed}`);
        }
        }
        const dog1 = new dog("Buddy","Golden Retriever");

        dog1.showdetails();
        dog1.speak();
