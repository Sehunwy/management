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

        $("#sideBar li a").click(function () {
            if($(this).attr("aria-expanded")==='false'){
                $(this).addClass(' identification');
                console.log("打开");
                $(".identification .changeArrow").addClass(' icon-iconfontjiantou');
                $(".identification .changeArrow").removeClass('icon-jiantou2');
                $(this).removeClass(' identification');
            } else {
                $(this).addClass(' identification');
                console.log("关闭");
                $("#sideBar li a .changeArrow").addClass(' icon-jiantou2');
                $("#sideBar li a .changeArrow").removeClass('icon-iconfontjiantou');
                $(this).removeClass(' identification');
            }
        });

        $("#sideBarAdmin li a").click(function () {
            $('#sideBarAdmin li a').removeClass('active-menu');
            $('.page-wrapper').addClass('displayNone');
            $('.page-wrapper').removeClass('displayBlock');
            let id = $(this).attr("id");
            let len = id.length;
            let addId = id.slice(11,len);
            $(this).addClass('active-menu');
            $('#'+addId).addClass('displayBlock');
        });
    });
// })
}(jQuery));


