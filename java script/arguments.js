// using arguments
function add() {
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    } else if (arguments.length === 4) {
        return arguments[0] + arguments[1] + arguments[2] + arguments[3];
    } else {
        return "Invalid number of arguments";
    }
}

console.log(add(2, 1));        // 3
console.log(add(1, 2, 3));     // 6
console.log(add(1, 2, 3, 4));  // 10
console.log(add());             // "Invalid number of arguments"

// so her we need to use arguments only as ita an built in and are not availabe for arrow-function
// argument.legth gives the number of arguments passed
// u can acess each aruguments by index (arguments[0],arguments[1]) etc.