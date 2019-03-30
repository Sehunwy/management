(function ($) {
    $(document).ready(function () {

        $("#sideBar li a").click(function () {
            $('#sideBar li a').removeClass('active-menu');
            $('.page-wrapper').addClass('displayNone');
            $('.page-wrapper').removeClass('displayBlock');
            $('.commmon').addClass('displayNone');
            $('.commmon').removeClass('displayBlock');
            $('.commmonTop').addClass('displayNone');
            $('.commmonTop').removeClass('displayBlock');
            let id = $(this).attr("id");
            console.log(id+' span');
            let len = id.length;
            let addId = id.slice(11,len);
            $(this).addClass('active-menu');
            $('#'+addId).addClass('displayBlock');
            $('#sideBar li a span').removeClass('iconColor');
            $('#sideBar li a span').addClass('iconColorWhite');
            $('#'+id+' span').addClass('iconColor');

            $('.'+addId).addClass('displayBlock');
            console.log("addId "+addId);
        });

        $(".topPage").click(function () {
            $('.commmonTop').addClass('displayNone');
            $('.commmonTop').removeClass('displayBlock');
            $('.commmon').addClass('displayNone');
            $('.commmon').removeClass('displayBlock');
            let className = $(this).attr("class");
            // console.log(id.trim().split(" "))
            let management = className.trim().split(" ")[0];
            let len = management.length;
            // console.log(id.slice(11,len));
            let addId = management.slice(11,len);
            // $('#'+addId).addClass('displayBlock');
            $('.'+addId).addClass('displayBlock');
        });

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
            $('.'+addId).addClass('displayBlock');
        });

        // 返回首页
        $(".index li a").click(function () {
            console.log(111);
            $('#sideBar li a').removeClass('active-menu');
            $('.page-wrapper').addClass('displayNone');
            $('.page-wrapper').removeClass('displayBlock');
            $('.commmonTop').addClass('displayNone');
            $('.commmonTop').removeClass('displayBlock');
            $('#one').addClass('displayBlock');
            $('#management_one').addClass('active-menu');
            $('#sideBar li a span').removeClass('iconColor');
            $('#sideBar li a span').addClass('iconColorWhite');
            $('#management_one span').addClass('iconColor');
        });

    });
// })
}(jQuery));



