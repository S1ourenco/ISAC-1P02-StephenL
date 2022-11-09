

var start = new Date();
var seconds = start.getTime();

function stopTime(){

var stop = new Date();
var seconds2 = stop.getTime();

var difference = (seconds2 - seconds)/ 1000;

alert ("You have been on the page for: "+ difference + " seconds");


} //function stopTime bracket
