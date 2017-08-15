$(function (){
    console.log($(".btn-primary").on('click',function (){
        $('.cms_table').hide();
        $('.cms_edit').show();
    })); 
})