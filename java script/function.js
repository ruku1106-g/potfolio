// no parameters and no return type
function add() {
    let a=10;
    let b =20;
    let c= a+b;
    console.log(c);
}
add();   

//with parameter and no return type
function sub(a,b) {
    let sub=a-b;
console.log(sub);
}
sub(5,10);


// no parameter with return type
function pro(){
    let a=10;
    let b =20;
    let c= a*b;
    return c;
}
console.log(pro());


// with parameter, with return type
function div(a,b){
    let c= a/b;
    return c;
}
console.log(div(20,10));