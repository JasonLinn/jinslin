$(function (){
    $(".btn-primary").on('click',function (){
        $('.cms_table').hide();
        $('.cms_edit').show();
    });
    $(".btn-cansel").on('click',function (){
        $('.cms_table').show();
        $('.cms_edit').hide();
    })
})