var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

var textRow = $(".textRow")

$(document).ready(function () {
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

var hour = moment().hour();

function timeChecker(hour, timeBlock) {
    var currentHour = moment().hours()
    if (currentHour === hour) {
        timeBlock.addClass('present')
        console.log('You are in the Present!')
    } else if (currentHour > hour) {
        console.log(' <- Elements in the Past!')
        timeBlock.addClass('past')
        timeBlock.removeClass('present')
    } else {
        console.log('<- Elements in the Future!')
        timeBlock.addClass('future')
    }
} 

for (let i = 0; i < textRow.length; i++) {
 
    var blockID = textRow[i].id;
    
    if(blockID == hour){
        textRow[i].classList.add('present')
    }
    else if(blockID < hour){
        textRow[i].classList.add('past')
    }
    else if(blockID > hour){
        textRow[i].classList.add('future')
    }


}