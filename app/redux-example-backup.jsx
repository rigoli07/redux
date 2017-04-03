var redux = require('redux');

console.log('Strating redux example');

// pure function - always going to return the same result, given the same parametres. doesn't rely on variables or doesn't change any values outside of itself. no asychronous requests, no promises or callbacks 
function add(a, b) {
    return a + b;
}

//not a pure function
var a = 3;
function add(b) {
    return a + b;
}

//not a pure function - can modify any values outside of itself.
var result;
function add(a, b) {
    result = a + b;
    return result;
}

//not a pure function - resukt varies based on the seconds
function add(a, b) {
    return a + b + new Date().getSeconds();
}

function changeProp(obj) {
    return {
        ...obj,
        name: 'Jen'
    };
    //obj.name = 'Jen';
    //return obj;
}

var startingValue = {
    name: 'Andrew',
    age: 25    
};

var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);