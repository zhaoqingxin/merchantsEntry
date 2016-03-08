/**
 * Created by sks on 2016/3/3.
 */
$(function(){
    //获取合作产品，拼字符串；获取公司接入服务器IP，拼字符串，符合后台要求
    function valuationInput(){
        if(!isPlaceholder()){
            $('input').each(function(index,item){
                if($(item).attr("placeholder")== $.trim($(item).val())){
                    $(item).val('');
                }
            })
        }
        $('#operateIp').val('');
        var operateIpValue = '';
        $('.MerchantsEntry_ip_box input').each(function(index,item){
            if($.trim(item.value)){
                if(operateIpValue){
                    operateIpValue = $.trim(item.value)+','+operateIpValue;
                }else{
                    operateIpValue = $.trim(item.value);
                }
            }
        });
        $('#operateIp').val(operateIpValue);
        var coopProductValue = '';
        $('.coopProduct-item input').each(function(index,item){
            if(item.checked){
                if(coopProductValue){
                    coopProductValue = $(item).attr('name')+','+coopProductValue;
                }else{
                    coopProductValue = $(item).attr('name');
                }
            }
        });
        $('#coopProduct').val(coopProductValue);
    }

    //添加公司接入服务器IP，需求可填写多项
    $('#addItems').click(function(){
        if($('.MerchantsEntry_ip_box input').size()>=10)return;
        $(this).parent().parent().append('<div class="clearfix margin-bottom-10"><input type="text" class="alone-input"/></div>')
    });

    //日期控件
    $('.datepicker').datepicker({
        autoclose:true,
        format:"yyyy-mm-dd",
        language:"zh"
    });

    /*合作网址选项不同，提示不同信息*/
    $('#operateWebSite-label').change(function(){
        $('#operateWebSite').val('').attr('placeholder',$(this).val());
        handlePlaceholder()
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

    /*暂存提交处理，对不支持placeholder的版本，验证value是否等于placeholder，如果等于就将value设置为空*/
    $('#current-Page').click(function(){
        $('#targetPage').val('Y3');
        valuationInput();//调用拼接字符串函数
        if(validateFn()){
            $('#submit').click();
        }
        handlePlaceholder();
    });

    //获取跳转页数，并提交
    $('#prev-page').click(function(){
        $('#targetPage').val('N2');
        location.href='step2.html'
    });
    $('#next-page').click(function(){
        valuationInput();//调用拼接字符串函数
        $('#targetPage').val('Y4');
        submitRequiredVerify();
        handlePlaceholder();
    });
});