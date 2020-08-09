
var m = moment();
var currentDay = m.format('MMMM Do YYYY, h:mm:ss a');

$("#currentDay").text(currentDay);

var currentHour = m.hours();

var plannerTextArr = [];

var nine = m.hour(9).format("hA");
$("#nine").text(nine);
var ten = m.hour(10).format("hA");
$("#ten").text(ten);
var eleven = m.hour(11).format("hA");
$("#eleven").text(eleven);
var twelve = m.hour(12).format("hA");
$("#twelve").text(twelve);
var one = m.hour(13).format("hA");
$("#one").text(one);
var two = m.hour(14).format("hA");
$("#two").text(two);
var three = m.hour(15).format("hA");
$("#three").text(three);
var four = m.hour(16).format("hA");
$("#four").text(four);
var five = m.hour(17).format("hA");
$("#five").text(five);