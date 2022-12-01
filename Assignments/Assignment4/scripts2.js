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

function showNum(){

document.getElementById('PhoneNum').innerHTML = "Phone # 647-966-5071";

}
