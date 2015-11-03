$(document).ready(function() {

});
$('a').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});