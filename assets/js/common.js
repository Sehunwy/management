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

        // $("#sideBar li a").click(function () {
        //     if($(this).attr("aria-expanded")==='false'){
        //         $(this).addClass(' identification');
        //         console.log("打开");
        //         $(".identification .changeArrow").addClass(' icon-iconfontjiantou');
        //         $(".identification .changeArrow").removeClass('icon-jiantou2');
        //         $(this).removeClass(' identification');
        //     } else {
        //         $(this).addClass(' identification');
        //         console.log("关闭");
        //         $("#sideBar li a .changeArrow").addClass(' icon-jiantou2');
        //         $("#sideBar li a .changeArrow").removeClass('icon-iconfontjiantou');
        //         $(this).removeClass(' identification');
        //     }
        // });

        $("#sideBar li a").click(function () {
            $('#sideBar li a').removeClass('active-menu');
            $('.page-wrapper').addClass('displayNone');
            $('.page-wrapper').removeClass('displayBlock');
            let id = $(this).attr("id");
            console.log(id+' span');
            let len = id.length;
            let addId = id.slice(11,len);
            $(this).addClass('active-menu');
            $('#'+addId).addClass('displayBlock');
            $('#sideBar li a span').removeClass('iconColor');
            $('#sideBar li a span').addClass('iconColorWhite');
            $('#'+id+' span').addClass('iconColor');
        });

        // $(".topBar li a").click(function () {
        //     $('.page-wrapper').addClass('displayNone');
        //     $('.page-wrapper').removeClass('displayBlock');
        //     let id = $(this).attr("id");
        //     let len = id.length;
        //     let addId = id.slice(11,len);
        //     $('#'+addId).addClass('displayBlock');
        // });

        $(".newPage").click(function () {
            console.log("1111");
            $('.page-wrapper').addClass('displayNone');
            $('.page-wrapper').removeClass('displayBlock');
            // let id = $(this).attr("id");
            let className = $(this).attr("class");
            // console.log(id.trim().split(" "))
            let management = className.trim().split(" ")[0];
            let len = management.length;
            // console.log(id.slice(11,len));
            let addId = management.slice(11,len);
            $('#'+addId).addClass('displayBlock');
        });

        // 返回首页
        $(".index li a").click(function () {
            console.log(111);
            $('#sideBar li a').removeClass('active-menu');
            $('.page-wrapper').addClass('displayNone');
            $('.page-wrapper').removeClass('displayBlock');
            $('#one').addClass('displayBlock');
            $('#management_one').addClass('active-menu');
            $('#sideBar li a span').removeClass('iconColor');
            $('#sideBar li a span').addClass('iconColorWhite');
            $('#management_one span').addClass('iconColor');
        });

    });
// })
}(jQuery));



