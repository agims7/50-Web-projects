$(document).ready(function () {

    var pageLimit = 48;

    for (var i = 1; i <= pageLimit; i++) {
        $('#right').append('<div class="blocks"></div>')
    }

    var paint = "white"

    $(".color").on("click", function () {
        paint = $(this).css('background-color');
    })

    $('.blocks').on('click', function () {

        $(this).css("background-color", paint);
    });

});