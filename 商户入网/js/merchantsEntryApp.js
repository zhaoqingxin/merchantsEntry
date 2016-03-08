/**
 * Created by sks on 2016/3/3.
 */
/*测试是否兼容placeholder属性*/
function isPlaceholder(){
    var input = document.createElement('input');
    return 'placeholder' in input;
}

/*非必填，但是需要验证格式*/
function validateFn(){
    var hintValue='';
    var errValue = {
        empty:'*项为必填项，请填写完整表单后重新提交。',
        formatError:'格式错误，请修改后重新提交。'
    };
    var bSubmit=true;
    $('.border-red').removeClass('border-red');
    $('.MerchantsEntry-hint').remove();
    if(!isPlaceholder()){
        $('input').each(function(index,item){
            if($(item).attr("placeholder")== $.trim($(item).val())){
                $(item).val('');
            }
        })
    }
    $('input').each(function(index,item){
        if($(item).attr('validate')&&!$.trim($(item).val())==''&&!merchantsEntryValidate($(item).val(),$(item).attr('validate'))){
            $(item).addClass('border-red');
            $('.border-red').focus(function(){
                $(this).removeClass('border-red');
                $('.MerchantsEntry-hint').remove();
            });
            hintValue = errValue.formatError;
            $(item).parent().parent().append('<span class="illustrate color-red MerchantsEntry-hint">'+hintValue+'</span>');
            bSubmit=false;
            return false
        }
    });
    if(bSubmit){
        return true;
    }else{
        return false;
    }
}

/*提交前对required的输入框进行验证*/
function submitRequiredVerify(){
    var bSubmit=true;
    var hintValue='';
    var errValue = {
        empty:'*项为必填项，请填写完整表单后重新提交。',
        formatError:'格式错误，请修改后重新提交。'
    };
    $('.border-red').removeClass('border-red');
    $('.MerchantsEntry-hint').remove();
    $('.required').each(function(index,item){
        if($.trim(item.value)==''||$(item).attr("placeholder")==$.trim($(item).val())||!merchantsEntryValidate($(item).val(),$(item).attr('validate'))){
            if(!merchantsEntryValidate($(item).val(),$(item).attr('validate'))){
                $(item).addClass('border-red');
                $('.border-red').focus(function(){
                    $(this).removeClass('border-red');
                    $('.MerchantsEntry-hint').remove();
                });
                hintValue = errValue.formatError;
            }
            if($.trim(item.value)==''||$(item).attr("placeholder")==$.trim($(item).val())){
                $(item).addClass('border-red');
                $('.border-red').focus(function(){
                    $(this).removeClass('border-red');
                    $('.MerchantsEntry-hint').remove();
                });
                hintValue = errValue.empty;
            }
            $(item).parent().parent().append('<span class="illustrate color-red MerchantsEntry-hint">'+hintValue+'</span>');
            bSubmit=false;
            return false;
        }
    });
    if(bSubmit==false){
        return false
    }
    $('input').each(function(index,item){
        if($(item).attr('validate')&&!$.trim($(item).val())==''&&!merchantsEntryValidate($(item).val(),$(item).attr('validate'))){
            $(item).addClass('border-red');
            $('.border-red').focus(function(){
                $(this).removeClass('border-red');
                $('.MerchantsEntry-hint').remove();
            });
            hintValue = errValue.formatError;
            $(item).parent().parent().append('<span class="illustrate color-red MerchantsEntry-hint">'+hintValue+'</span>');
            bSubmit=false;
            return false;
        }
    });
    if(bSubmit==false){
        return false
    }
    $('#submit').click();
}


/*不支持Placeholder属性的浏览器，兼容写法*/
function handlePlaceholder(){
    if(!isPlaceholder()){
        $("input").not("input[type='password']").not("input[type='button']").not("input[type='submit']").each(function(){
            if($(this).val()=="" && $(this).attr("placeholder")!=""){
                $(this).val($(this).attr("placeholder"));
                $(this).css("color","#bbb");
                $(this).focus(function(){
                    if($(this).val()==$(this).attr("placeholder")) {
                        $(this).val("");
                        $(this).css("color","#000");
                    }else{
                        $(this).css("color","#000");
                    }
                });
                $(this).blur(function(){
                    if($(this).val()==""){
                        $(this).val($(this).attr("placeholder"));
                        $(this).css("color","#bbb");
                    }
                });
            }
        });
    }
}
$(function(){
    //不支持Placeholder.IE下实现Placeholder效果
    handlePlaceholder();
});
