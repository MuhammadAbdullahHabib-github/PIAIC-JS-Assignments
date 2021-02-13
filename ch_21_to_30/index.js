var number = prompt("Please inut your number in decimal like 3.5 :");
var round = Math.ceil(number);
var text = 'This is my dummy text';
var sliceText = text.slice(0,number);
console.log("its"+ sliceText);
let newString;

for(var i = sliceText.length - 1 ; i >= 0  ; i--){  
     
     newString = newString + sliceText.charAt(i);
     console.log(newString);
}
alert(newString);