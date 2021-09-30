var currentDay = moment().format("dddd, MMMM Do")
var displayDay = $("#currentDay")
var timerInterval
var saveBtn = $('.saveBtn')
var savedTxtArray = ["","","","","","","","",""]
displayDay.text(currentDay)

// var currentTime = moment().format("s")
// console.log(currentTime)
// $('.textarea').addClass("future")

// parseInt(nine.attr('id'))
// $(".textarea").toArray()[1].addClass('present')
timerInterval = setInterval(function() {
    var currentTime = moment().format("H")

for(i = 9; i < 18; i++) {
    // console.log($('#' + string))
    if(currentTime == i) {
        $('#' + i).addClass("present")
        $('#' + i).removeClass("future")
        $('#' + i).removeClass("past")
    } else if(currentTime < i) {
        $('#' + i).addClass("future")
        $('#' + i).removeClass("present")
        $('#' + i).removeClass("past")
    } else {
        $('#' + i).addClass("past")
        $('#' + i).removeClass("future")
        $('#' + i).removeClass("present")
    }
    

}
// console.log(currentTime)
}, 1000)
// $('#' + 10).addClass("present")



saveBtn.on('click', function() {
    var clickBtn = $(this);
    var clickedID = parseInt(clickBtn.attr("id"))
    // console.log(parseInt(clickedID))
    var text = clickBtn.parent().children().eq(1).val();
    localStorage.setItem(clickedID, text)

    
})

$('textarea').each(function(i) {
    $(this).val(localStorage.getItem(i+9))
})


