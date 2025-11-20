function add(...numbers) {
    let sum=0;
    for(num of numbers){
        sum +=num;
    }
    return sum;
}

console.log(add(1,2));
console.log(add(2,3,4));
console.log(add(3,4,5,6));
console.log(add());

// so here we are making use of spread opeartor and use for loop to iterate from 1st num to last num
// so here we will make use of (...numbers) so will know that we are making use of spread or rest opeartor 

function greet(){
    console.log("Hello, world");
}

function greet(name){
 console.log("hello"+ name);
}

greet();
greet("john");