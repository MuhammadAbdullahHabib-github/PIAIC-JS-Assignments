var value = prompt("Please enter string : ");
var iot = value.split(" ");


for (let i = 0; i < iot.length; i++) {
     var first = iot[i].slice(0,1).toUpperCase();
     var second = iot[i].slice(1).toLowerCase();
     iot[i] = first + second;
}


var joined = iot.join(" ");
alert(joined);