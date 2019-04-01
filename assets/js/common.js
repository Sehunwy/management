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
            let len = id.length;
            let addId = id.slice(11,len);
            $(this).addClass('active-menu');
            $('#'+addId).addClass('displayBlock');
            $('#sideBar li a span').removeClass('iconColor');
            $('#sideBar li a span').addClass('iconColorWhite');
            $('#'+id+' span').addClass('iconColor');
            $('.'+addId).addClass('displayBlock');
        });

        $(".topPage").click(function () {
            $('.commmonTop').addClass('displayNone');
            $('.commmonTop').removeClass('displayBlock');
            $('.commmon').addClass('displayNone');
            $('.commmon').removeClass('displayBlock');
            let className = $(this).attr("class");
            let management = className.trim().split(" ")[0];
            let len = management.length;
            let addId = management.slice(11,len);
            $('.'+addId).addClass('displayBlock');
        });

        $(".newPage").click(function () {
            $('.page-wrapper').addClass('displayNone');
            $('.page-wrapper').removeClass('displayBlock');
            let className = $(this).attr("class");
            let management = className.trim().split(" ")[0];
            let len = management.length;
            let addId = management.slice(11,len);
            $('#'+addId).addClass('displayBlock');
            $('.'+addId).addClass('displayBlock');
        });

        //弹框
        $(".bounced").click(function () {
            $('.bounced').addClass('displayBlock');
        });

        // 返回首页
        $(".index li a").click(function () {
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

        // 通知公告
        $(document).ready(function () {
            let $tab_li = $('#affiche ul li');
            $tab_li.click(function () {
                $(this).addClass('selected').siblings().removeClass('selected');
                let index = $tab_li.index(this);
                $('.type').addClass('hide');
                $('#type' + index).removeClass('hide');
            });
        });
    });

    $(document).ready(function () {
        let $tab_li = $('#content>ul>li');
        $tab_li.click(function () {
            $(this).addClass('selected').siblings().removeClass('selected');
            let index = $tab_li.index(this);
            $('.type').addClass('hide');
            $('#type' + index).removeClass('hide');
        });
    });
}(jQuery));



