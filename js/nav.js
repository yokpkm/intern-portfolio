var divs = $('about,portfolio,contact');

$(window).scroll(function () {
    $('[id^="box"]').each(function () {
        if (($(this).offset().top - $(window).scrollTop()) < 70) {
            $(this).stop().fadeTo('fast', 0);
        } else {
            $(this).stop().fadeTo('slow', 1);
        }
    });
});