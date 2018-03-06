

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            if($(this).scrollTop() + $(this).height() > $(document).height() - 100) {
                 $('.btnUp').addClass('black');
               }else {
                 $('.btnUp').removeClass('black');
               }
            $('.btnUp').fadeIn();
        } else {
            $('.btnUp').fadeOut();
        }
    });
    $('.btnUp').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('#about,#services,#contactus').click(function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
