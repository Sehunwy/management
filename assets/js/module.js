$(function(){
    $.getJSON("test.json",function(allData){ //jQuery的获取json文件的方法，并返回一个json对象 allData
        var html = ejs.render( $("#module").html(), { data : allData } );
        $("#show").append(html);
    });
});