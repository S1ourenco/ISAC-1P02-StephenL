
if (confirm("By entering this page you agree not to download or share any information from it as it is shared for educational purposes as some information shared is personal") == true){
  yes= "you have accepted the terms of this page";
}
else{

  window.location.href = "page1.html";
}

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
