$('.box').click(function() {

    $(this).animate({
        left: '-50%'
    }, 500, function() {
        $(this).css('left', '150%');
        $(this).appendTo('#container');
    });

    $(this).next().animate({
        left: '50%'
    }, 500);
});