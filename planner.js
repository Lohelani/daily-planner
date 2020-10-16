$(document).ready(function () {

    var mmnt = moment();
    console.log(mmnt);
    console.log(mmnt.toString());
    console.log(mmnt.format('dddd DD MMMM YYYY h:mm:ss a'))
    console.log(mmnt.hour());

    function updateTime() {
        var mmnt = moment().format('dddd DD MMMM YYYY h:mm:ss a');
        $('#momentDate').html(mmnt);
        setTimeout(updateTime, 0000);
    };

    setTimeout(updateTime, 0000);

    $('.saveBtn').on('click', function () {
        var text = $(this).siblings('.events').val();
        console.log(text);
        var time = $(this).parent().attr('id');
        console.log(time);
        localStorage.setItem(time, text);

    })

    function hourUpdate() {
        var currentTime = mmnt.hours();

        $(".time-block").each(function () {
            var hour = parseInt($(this).attr('id'));

            if (hour < currentTime) {
                $(this).addClass("past");
            }
            else if (currentTime === hour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else if (hour > currentTime) {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        });
    };
    hourUpdate();

    $('#9 .events').val(localStorage.getItem('9'));
    $('#10 .events').val(localStorage.getItem('10'));
    $('#11 .events').val(localStorage.getItem('11'));
    $('#12 .events').val(localStorage.getItem('12'));
    $('#13 .events').val(localStorage.getItem('13'));
    $('#14 .events').val(localStorage.getItem('14'));
    $('#15 .events').val(localStorage.getItem('15'));
    $('#16 .events').val(localStorage.getItem('16'));
    $('#17 .events').val(localStorage.getItem('17'));

});
