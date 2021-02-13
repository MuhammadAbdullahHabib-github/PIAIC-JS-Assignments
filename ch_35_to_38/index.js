var inputValue = prompt("Please enter your text :");

function capatilizing(){
    var value = inputValue.toUpperCase();
    console.log(value);
}

capatilizing();


var inputNumber = prompt("Please enter your number :");

function factorize(){
    var fac = Number(inputNumber);
    var total = 1;
    for (let i = fac; i > 0 ; i--) {
        total = total * i;
    }
    console.log(total);

}

factorize();

var value = multiply(4,3,6);

function add(a,b){
    var z = a + b;
    return z;
}

function multiply(a,b,c){
    var z = a* add(b,c);
    return z;
}

console.log("value" , value);

var course = "cloud native computing";
console.log("course", course);