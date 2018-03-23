// JavaScript Document
$("a.page-scroll").click(function() {
  "use strict";
    var targetDiv = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetDiv).offset().top
    }, 1000, 'easeOutExpo');
});