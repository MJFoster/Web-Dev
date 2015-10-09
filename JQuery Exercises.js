// JQuery Exercises ....
//
// Upon 'click' of a 'button' HTML elements wih a '.vanish' class, run a function using the ".fadeOut()" selector.
// 
$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut("slow");
    });
});