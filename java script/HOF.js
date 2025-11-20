const number = [1,2,3,4,5,6];

//step 1: double each number
const double = number.map(num => num *2);


// step 2: keep only numbers greater than 5
const filter = number.filter(num =>num >5);

// step3: find the sum of remaining no
const total = filter.reduce((sum,num) => sum + num,0);

console.log(double);
console.log(filter);
console.log(total);