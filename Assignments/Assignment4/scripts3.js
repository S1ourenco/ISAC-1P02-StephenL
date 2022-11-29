
if (confirm("By entering this page you agree not to download or share any information from it as it is shared for educational purposes") == true){
  yes= "you have accepted the terms of this page";
}
else{

  window.location.href = "page1.html";
//https://www.tutorialrepublic.com/faq/how-to-redirect-to-another-web-page-using-jquery.php#:~:text=Answer%3A%20Use%20the%20JavaScript%20window,location%20Property&text=If%20you%20want%20to%20redirect,replace("page_url")%20.
}


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
