/**
 * Created by Administrator on 2016/3/3.
 */
$(function(){
    /*�ݴ��ύ�����Բ�֧��placeholder�İ汾����֤value�Ƿ����placeholder��������ھͽ�value����Ϊ��*/
    $('#current-Page').click(function(){
        $('#targetPage').val('Y1');
        if(validateFn()){
            $('#submit').click();
        }
        handlePlaceholder();
    });

    /*�ύ��֤���Բ�֧��required������������˸�д������֤�Ƿ�Ϊ��*/
    $("#next-page").click(function(){
        $("#targetPage").val('Y2');
        submitRequiredVerify();
        handlePlaceholder();
    });
});
