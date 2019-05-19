<!--获取上传文件名称开始-->
function fileClick(fileChoose, fileName) {
    $('#' + fileChoose).click();
    $('#' + fileChoose).change(function () {
        let files = document.getElementById(fileChoose).files;
        $('#' + fileName).val(files[0].name);
    });
}
<!--获取上传文件名称结束-->

let NotificationsCount = "";
let NoticesCount = "";
//未读通知
function UnReadNotifications() {
    let url = "http://www.yuanbw.cn:20086/gpms/rol/showUnReadNotifications";
    let offset = 0;
    let limit = 5;
    let publicNotices = document.getElementById('publicNotices').innerHTML;
    let publicNotice = document.getElementById('publicNotice');
    $.ajax({
        url: url,
        type: "POST",
        data: {
            offset: offset,
            limit: limit
        },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        headers: {
            Token: token
        },
        success: function (responseStr) {
            if (responseStr.statusCode == "100") {
                NotificationsCount = responseStr.data.count;
                publicNotice.innerHTML = ejs.render(publicNotices, {data:responseStr.data.notifications});
            } else if (responseStr.statusCode == "102") {
                alert(responseStr.msg);
                window.location.href = "../login/login.html";
            } else {
                publicNotice.innerHTML = ejs.render(publicNotices, {data:""});
            }
        },
        error: function (responseStr) {
            window.location.href = "../404/404.html";
        }
    });
    console.log(NotificationsCount)
    count()
}

//未读公告
function showUnReadNotices() {
    let url = "http://www.yuanbw.cn:20086/gpms/rol/showUnReadNotices";
    let offset = 0;
    let limit = 5;
    let publicAannouncements = document.getElementById('publicAannouncements').innerHTML;
    let publicAannouncement = document.getElementById('publicAannouncement');
    $.ajax({
        url: url,
        type: "POST",
        data: {
            offset: offset,
            limit: limit
        },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        headers: {
            Token: token
        },
        success: function (responseStr) {
            if (responseStr.statusCode == "100") {
                NoticesCount = responseStr.data.count;
                publicAannouncement.innerHTML = ejs.render(publicAannouncements, {data:responseStr.data.noticeList});
            } else if (responseStr.statusCode == "102") {
                alert(responseStr.msg);
                window.location.href = "../login/login.html";
            } else {
                publicAannouncement.innerHTML = ejs.render(publicAannouncements, {data:""});
            }
        },
        error: function (responseStr) {
            window.location.href = "../404/404.html";
        }
    });
}

function count() {
    // UnReadNotifications();
    // showUnReadNotices();
    console.log(NotificationsCount)
}


// 取消输入框的值开始
function cancelTitle(classInput) {
    let textContent = document.getElementsByClassName(classInput);
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

//激活第一个tab
function returnFirst(class1, class2) {
    let classOne = document.getElementsByClassName(class1);
    let classOther = document.getElementsByClassName(class2);
    classOne[0].classList.add("active");
    classOne[1].classList.add("active");
    classOther[0].classList.remove("active");
    classOther[1].classList.remove("active");
}

//全选
function selectAll(id, className) {
    let isCheck = $("#" + id).is(':checked');  //获得全选复选框是否选中
    $("." + className).each(function () {
        this.checked = isCheck;       //循环赋值给每个复选框是否选中
    });
}

//cookies
function setCookie(name, value, time) {
    let strsec = getsec(time);
    let exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

function getsec(str) {
    let str1 = str.substring(1, str.length) * 1;
    let str2 = str.substring(0, 1);
    if (str2 == "s") {
        return str1 * 1000;
    } else if (str2 == "h") {
        return str1 * 60 * 60 * 1000;
    } else if (str2 == "d") {
        return str1 * 24 * 60 * 60 * 1000;
    }
}

function getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}


//清除cookie
function clearCookie(name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function loginOutFunction() {
    let url = "http://www.yuanbw.cn:20086/gpms/rol/logout";
    let token = getCookie("token");
    $.ajax({
        url: url,
        type: "POST",
        data: {},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        headers: {
            Token: token
        },
        success: function (responseStr) {
            if (responseStr.msg == "注销成功") {
                setCookie("token", "", "d1");
                window.location.href = "../login/login.html";
            }
        },
        error: function (responseStr) {
            setCookie("token", "", "d1");
            window.location.href = "../login/login.html";
        }
    });
}
