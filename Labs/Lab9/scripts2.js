

var age = Number (prompt ("Please enter your age?",""));

var start = new Date();
var year = Number(start.getFullYear());


var birthyear = year - age

console.log(year);

console.log(age);
console.log(birthyear);

document.getElementById('output').innerHTML = birthyear;
