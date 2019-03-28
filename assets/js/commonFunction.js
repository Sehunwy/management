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
