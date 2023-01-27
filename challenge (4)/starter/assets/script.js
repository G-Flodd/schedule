var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

var textRow = $(".textRow")

var preSave = JSON.parse(localStorage.getItem("memSave"));


$(document).ready(function () {
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

var hour = moment().hour();

for (let i = 0; i < textRow.length; i++) {

    var blockID = textRow[i].id;

    if (blockID == hour) {
        textRow[i].classList.add('present')
    }
    else if (blockID < hour) {
        textRow[i].classList.add('past')
    }
    else if (blockID > hour) {
        textRow[i].classList.add('future')
    }
}


$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    var textEntry = $(this).siblings("textarea").val();
    var time = $(this).siblings("textarea").attr('id');
    localStorage.setItem(time, textEntry);
});

$(function () {
    document.getElementById("9").value = localStorage.getItem("9");
    document.getElementById("10").value = localStorage.getItem("10");
    document.getElementById("11").value = localStorage.getItem("11");
    document.getElementById("12").value = localStorage.getItem("12");
    document.getElementById("13").value = localStorage.getItem("13");
    document.getElementById("14").value = localStorage.getItem("14");
    document.getElementById("15").value = localStorage.getItem("15");
    document.getElementById("16").value = localStorage.getItem("16");
    document.getElementById("17").value = localStorage.getItem("17");  
})