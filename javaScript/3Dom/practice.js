Function.prototype.describe = function () {
    console.log(`function name is ${this.name}`);

}
function greet(name) { //name paramaeter

    return `hellow${name}`
}
function masalachai() {

}
console.log(("nikhil"))//nikhil argumanet
masalachai.describe()


function add(a, b) {


    return a + b //function defination

}

const substract = function (a, b) {
    return a - b // funcn expression
}

const multiply = (a, b) => a * b//arrow func

//first class function 

function applyoperation(a, b, operation) {
    return operation(a, b)
}
const result = applyoperation(5, 4, (a, b) => a * b)
console.log(result);

