/**
 * Created by sks on 2016/3/4.
 */
$(function(){
   $('.MerchantsEntry_demand_nav span').click(function(){
       var index = $(this).index();
       $('.MerchantsEntry_demand_nav span').removeClass('active');
       $(this).addClass('active');
       $('.MerchantsEntryInformation li').removeClass('show').eq(index).addClass('show');
   })
});