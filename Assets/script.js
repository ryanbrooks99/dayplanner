


function getLocalStorage(save) {
    let value = localStorage.getItem(save);
    if (value) {
        $(`#text${save}`).text(value);
    }
}

$( document ).ready(function() {

    // Code to set current date on HTML

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // For loop to create rows and columns
    for (let i = 9; i < 18; i++) {
    
        var row = $(`<div data-time=${i} id='${i}' class="row">`);
        var column1 = $('<div class="col-sm-2"> <p class="hour">' + formatHoursToAMPM(i) + '</p>');
        var column2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" width="100%" placeholder="Add event.."></textarea>`);        
        var column3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="far fa-save"></i></button>`)
        
        // Code to append columns to rows
        row.append(column1);
        row.append(column2);
        row.append(column3);

        // Appends row to container
        $(".container").append(row);

        
        getLocalStorage(i);
    }
    // Code formats hours to AM/PM
    function formatHoursToAMPM(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
formatHoursToAMPM();

// function to set past, present, and futures color scheme
function updateColors(){
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) { 
        console.log(currentTime, $(`#${i}`).data("time"));
         if ($(`#${i}`).data("time") == currentTime){
            $(`#text${i}`).addClass( "present");
        } else if (currentTime < $(`#${i}`).data("time")) {
            $(`#text${i}`).addClass( "future");
        }
    }
}

setInterval(function() {
    updateColors();
}, 1000);

// Setting Button on click event
var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){
    let eventId = $(this).attr('id');
    let eventText = $(this).parent().siblings().children('.description').val();
    localStorage.setItem(eventId, eventText);
});});