
var m = moment();

var currentDay = m.format("dddd, MMMM, Do YYYY");

$("#currentDay").text(currentDay);

var currentHour = m.hours();

