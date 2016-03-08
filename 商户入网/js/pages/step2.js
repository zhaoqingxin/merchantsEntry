/**
 * Created by sks on 2016/3/3.
 */
$(function(){
    /*日期控件*/
    $('.datepicker').datepicker({
        autoclose:true,
        format:"yyyy-mm-dd",
        language:"zh"
    });

    /*对于有效期是长期的证件，将长期选项设置成9999年12月31日*/
    $('.forever').click(function() {
        var id = $(this).attr('id').split('-')[0]
        if (this.checked) {
            $('#'+id).val('长期')
        }else{
            $('#'+id).val('')
        }
    });
    function forever(){
        if($('#businessEndTime').val()=='长期'){
            $('#businessEndTime').val('9999-12-31')
        }else if($('#businessEndTime').val()=='9999-12-31'){
            $('#businessEndTime').val('长期')
        }
        if($('#legalPersonValidEnd').val()=='长期'){
            $('#legalPersonValidEnd').val('9999-12-31')
        }else if($('#legalPersonValidEnd').val()=='9999-12-31'){
            $('#legalPersonValidEnd').val('长期')
        }
    }

    /*折叠*/
    $('.fold').click(function(){
        if($(this).next().hasClass('form-hide'))
        {
            $(this).removeClass('fold-hide');
            $(this).next().removeClass('form-hide');
        }else{
            $(this).addClass('fold-hide');
            $(this).next().addClass('form-hide');
        }
    });

    /*暂存提交处理，对不支持placeholder的版本，验证value是否等于placeholder，如果等于就将value设置为空*/
    $('#current-Page').click(function(){
        $('#targetPage').val('Y2');
        forever();
        if(validateFn()){
            $('#submit').click();
        }
        handlePlaceholder();
    });


    /*提交验证，对不支持required的浏览器进行了改写，并验证是否为空*/
    $('#prev-page').click(function(){
        //$('#targetPage').val('1');
        //$('#submit').click();
        $('#targetPage').val('N1');
        location.href='step1.html'
    });
    $('#next-page').click(function(){
        $('#targetPage').val('Y3');
        forever();
        submitRequiredVerify();
        forever();
        handlePlaceholder();
    });
});
