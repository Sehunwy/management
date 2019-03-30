(function ($) {
    $(document).ready(function () {
        $("#sideNav").click(function () {
            if ($(this).hasClass('closed')) {
                $(this).addClass(' icon-right-s');
                $(this).removeClass(' iconColor');
                $(this).removeClass('icon-left-s');
                $('.navbar-side').animate({left: '0px'});
                $(this).removeClass('closed');
                $('#page-wrapper').animate({'margin-left': '260px'});
                $('.page-wrapper').animate({'margin-left': '260px'});

            } else {
                $(this).addClass('closed');
                $(this).addClass(' icon-left-s');
                $(this).addClass(' iconColor');
                $(this).removeClass('icon-right-s');
                $('.navbar-side').animate({left: '-260px'});
                $('#page-wrapper').animate({'margin-left': '0px'});
                $('.page-wrapper').animate({'margin-left': '0px'});
            }
        });
    });
}(jQuery));



