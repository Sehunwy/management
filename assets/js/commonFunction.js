<!--获取上传文件名称开始-->
function fileClick(fileChoose, fileName) {
    $('#' + fileChoose).click();
    $('#' + fileChoose).change(function () {
        let files = document.getElementById(fileChoose).files;
        $('#' + fileName).val(files[0].name);
    });
}
<!--获取上传文件名称结束-->