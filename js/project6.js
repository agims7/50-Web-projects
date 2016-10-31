$(document).ready(function () {

    var pageLimit = 600;

    for (var i = 1; i <= pageLimit; i++) {
        $('#container').append('<div class="blocks"></ div>')
    }

    function randomColor() {
        return '#' + Math.random().toString(16).slice(2, 8);
    };

    $('.blocks').mouseover(function () {
        $(this).css("background-color", randomColor());
        $(this).css('box-shadow', "0 0 30px white");
    });

    $('.blocks').mouseleave(function () {
        $(this).css('box-shadow', "none");
    });

});