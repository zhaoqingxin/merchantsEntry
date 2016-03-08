/**
 * Created by Administrator on 2016/3/3.
 */
$(function(){
    /*暂存提交处理，对不支持placeholder的版本，验证value是否等于placeholder，如果等于就将value设置为空*/
    $('#current-Page').click(function(){
        $('#targetPage').val('Y1');
        if(validateFn()){
            $('#submit').click();
        }
        handlePlaceholder();
    });

    /*提交验证，对不支持required的浏览器进行了改写，并验证是否为空*/
    $("#next-page").click(function(){
        $("#targetPage").val('Y2');
        submitRequiredVerify();
        handlePlaceholder();
    });
});
