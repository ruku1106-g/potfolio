//function overloading
//function with same name but diff no of parameters
// not possible in js

function add(){ //0 paramters
    console.log(5+5);
}

function add(a,b){ //2 paramters
    console.log(a+b);
}

function add(a,b,c){  //3 paramters
    console.log(a+b+c);
}

function add(a,b,c,d){ //4 paramters
    console.log(a+b+c+d);
}

add(); //nan
add(10,20); //nan
add(10,20,30); //nan
add(10,20,30,40); 100
// this is not possible in js ok na because in js all the functions are treated as objects so we get the o.p as
// nan, nan, nan and 100