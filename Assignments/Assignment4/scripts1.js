function darkmode(){

  var element = document.body;
element.classList.toggle ("darkmode");

} // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode //


function theTime(){
var date = new Date();
var currentdate = date.getMonth()+ 1+ "/"+ date.getDate()+ "/"+ date.getFullYear();+"-"+ date.getHours()
currentdate = currentdate + " - " + date.getHours( )+ ":" + date.getMinutes() + ":" + date.getSeconds();
document.getElementById('clock').innerHTML = currentdate;
}

setInterval(theTime, 100);



function showNum(){


document.getElementById('PhoneNum').innerHTML = "Phone # 647-966-5071";

}

function CalcAge(){

var age = prompt("Enter Your Age");
var difference = age - 24;

  if (difference <= 0) {
      document.getElementById('years').innerHTML = difference * -1;
    }
  else {
  document.getElementById('years').innerHTML = difference;
    }

 if (age>=24) {
   document.getElementById('OldYoung').innerHTML = "older";
    }
  else {
  document.getElementById('OldYoung').innerHTML = "younger";
    }

}
