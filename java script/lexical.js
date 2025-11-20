function outer(){
    let name ="js";
    
    function middle(){
        function inner(){
            console.log(name);
        }
        inner();
    }
    middle();
}
outer();

// let gvar = 10;
// function outer () {
//     let lovar = 20;
//     function inner (){
//         let bvar =30;
//         console.log(gvar);
//         console.log(lovar);
//         console.log(bvar);
//     }
//     console.log(gvar);
//     console.log(lovar);
//     console.log(bvar); // error becuse it outside the block
// inner();
// }
//     console.log(gvar);
//     console.log(lovar);
//     console.log(bvar);
//         // if we place it here we will get only global .
// outer();
