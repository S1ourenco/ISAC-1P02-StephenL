function theTime(){

  var date = new Date();

  var currentdate = date.getMonth()+ 1+ "/"+ date.getDate()+ "/"+ date.getFullYear();+"-"+ date.getHours()

  currentdate = currentdate + " - " + date.getHours( )+ ":" + date.getMinutes() + ":" + date.getSeconds();

  document.getElementById('clock').innerHTML = currentdate;
}

setInterval(theTime, 100);

function darkmode(){

  var element = document.body;

  element.classList.toggle ("darkmode");

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


function randomfact(){

randomnum = Math.floor(Math.random() *(5 - 0 )) + 1;

realnumb = Number(randomnum);

if (realnumb==1){

document.getElementById('randomfacts').innerHTML = "I Played Soccer for 10 years";

}
if (realnumb==2) {

document.getElementById('randomfacts').innerHTML ="This class is my last elective for my undergrad! ";
}

if (realnumb==3) {
  document.getElementById('randomfacts').innerHTML ="I worked for the Residence Life Staff at Brock University for 3 years";
}
if (realnumb==4) {
  document.getElementById('randomfacts').innerHTML ="I live in Mississuaga";
}
if (realnumb==5) {
  document.getElementById('randomfacts').innerHTML ="I'm a big fan of StarWars and Marvel TV, film and books series";
}

}


function showNum(){


document.getElementById('PhoneNum').innerHTML = "Phone # 647-966-5071";

}
