/**
 * Created by sks on 2016/3/3.
 */
$(function(){
    $('#settlementInterval').val('T+1');
    /*设置isWorkDaySettlement字段的值*/
    $('input[name=isWorkDay]').click(function(){
        $('#isWorkDaySettlement').val($(this).attr('estimate'));
    });

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

    //结算周期的js
    $('#setInterval').change(function(){
        var value=$(this).val();
        if(value=='其他'){
            $('#settlementInterval').val('');
            $('#setIntervalInput').removeClass('form-hide');
        }else{
            $('#setIntervalInput').val('').addClass('form-hide');
            $('#settlementInterval').val(value);
        }
    });
    $('#setIntervalInput').change(function(){
        $('#settlementInterval').val($(this).val());
    });

    /*点击提交，出现模态框，提示是否确认提交*/
    $('#MerchantsEntry-submit').click(function(){
        var screenHeight = $(window).height();
        $('.screen-full-height').css('height',screenHeight);
        $('.MerchantsEntry-mask').removeClass('MerchantsEntry-mask-hide');
    });

    /*关闭模态框，返回表单输入界面*/
    $('#cancel-submit').click(function(){
        $('.MerchantsEntry-mask').addClass('MerchantsEntry-mask-hide');
    });
    $('.MerchantsEntry-fork').click(function(){
        $('.MerchantsEntry-mask').addClass('MerchantsEntry-mask-hide');
    });

    /*暂存提交处理，对不支持placeholder的版本，验证value是否等于placeholder，如果等于就将value设置为空*/
    $('#current-Page').click(function(){
        $('#targetPage').val('Y4');
        if(validateFn()){
            $('#submit').click();
        }
        handlePlaceholder();
    });

    /*验证并提交，对不支持required的浏览器进行了改写，并验证是否为空*/
    $('#prev-page').click(function(){
        $('#targetPage').val('N3');
        location.href='step3.html'
    });
    $('#MerchantsEntry-submit-sure').click(function(){
        $('.MerchantsEntry-mask').addClass('MerchantsEntry-mask-hide');
        $('#targetPage').val('Y5');
        submitRequiredVerify();
        handlePlaceholder();
    });

});