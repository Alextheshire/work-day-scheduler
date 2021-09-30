var nine = $("#9")
var ten = $("#10")
var eleven = $("#11")
var twelve = $("#12")
var one = $("#13")
var two = $("#14")
var three = $("#15")
var four = $("#16")
var five = $("#17")
var string = "9"
// var timeBlocks = {
//     nine: $('#9'),
//     ten: $('#10'),
//     eleven: $('#11'),
//     twelve: $('#12'),
//     one: $('#13'),
//     two: $('#14'),
//     three: $('#15'),
//     four: $('#16'),
//     five: $('#17')
// }
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]

currentTime = moment().format("H")
console.log(currentTime)
$('.textarea').addClass("future")
var exodia = ($.inArray( 11, timeArray, ))
// parseInt(nine.attr('id'))
// $(".textarea").toArray()[1].addClass('present')

for(i = 9; i < 18; i++) {
    // console.log($('#' + string))
    if(10 == i) {
        $('#' + i).addClass("present")
        $('#' + i).removeClass("future")
        $('#' + i).removeClass("past")
    } else if(10 < i) {
        $('#' + i).addClass("future")
        $('#' + i).removeClass("present")
        $('#' + i).removeClass("past")
    } else {
        $('#' + i).addClass("past")
        $('#' + i).removeClass("future")
        $('#' + i).removeClass("present")
    }

}
// $('#' + 10).addClass("present")








