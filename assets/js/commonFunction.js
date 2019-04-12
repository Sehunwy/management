<!--获取上传文件名称开始-->
function fileClick(fileChoose, fileName) {
    $('#' + fileChoose).click();
    $('#' + fileChoose).change(function () {
        let files = document.getElementById(fileChoose).files;
        $('#' + fileName).val(files[0].name);
    });
}

<!--获取上传文件名称结束-->

// 取消输入框的值开始
function cancelTitle() {
    let textContent = document.getElementsByClassName('textContent');
    for (let i = 0; i < textContent.length; i++) {
        textContent[i].value = "";
    }
}

// 取消输入框的值结束

function showMaxImg(obj) {
    var src = $(obj).attr("src");
    $("#imgModal").find("#imgshow").html("<img src='" + src + "' class='carousel-inner img-responsive img-rounded' data-dismiss='modal'>");
    $("#imgModal").modal('show');
}

//全选
function selectAll(id, className) {
    let isCheck = $("#" + id).is(':checked');  //获得全选复选框是否选中
    $("." + className).each(function () {
        this.checked = isCheck;       //循环赋值给每个复选框是否选中
    });
}


//cookies
function setCookie(name,value,time)
{
    let strsec = getsec(time);
    let exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() +";path=/";
}
function getsec(str)
{
    let str1=str.substring(1,str.length)*1;
    let str2=str.substring(0,1);
    if (str2=="s")
    {
        return str1*1000;
    }
    else if (str2=="h")
    {
        return str1*60*60*1000;
    }
    else if (str2=="d")
    {
        return str1*24*60*60*1000;
    }
}

function getCookie(name)
{
    let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}