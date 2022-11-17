function math(operator){

 number1 = Number(document.getElementById("number1").value);
 number2 = Number(document.getElementById("number2").value);

if (operator=="+") {
  console.log("add");
  console.log(number1);
output = number1 + number2;
document.getElementById('output').value = output;

}
if (operator=="-") {
  console.log("subtract");
output = number1 - number2;
document.getElementById('output').value = output;
}
if (operator=="*") {
  console.log("multiply");
output = number1 * number2;
document.getElementById('output').value = output;
}
if (operator=="/") {
  console.log("divide");
output = number1 / number2;
document.getElementById('output').value = output;
}

}
