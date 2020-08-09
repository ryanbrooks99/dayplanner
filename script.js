
let m = moment();

var currentDayDisplay = m.format("dddd, MMMM, Do YYYY");

$("#currentDay").text(currentDayDisplay);

let currentHour = m.hours();