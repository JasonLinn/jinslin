$(function (){
    $(".news_btn_update").on('click',function (){
        const title = $(this).parent().parent().children("td:nth-child(2)").text();
        const content = $(this).parent().parent().children("td:nth-child(3)").text();
        const imgUrl = $(this).parent().parent().children("td:nth-child(4)").children("img").attr("src");
        const actionUrl = $(this).data("id");

        console.log(actionUrl)
        $(".news_update_img img").show();
        $(".news_update_title input").val(title);
        $(".news_update_content textarea").val(content);
        $(".news_update_img img").attr("src",imgUrl);
        $(".news_update_form").attr("action","/news/"+actionUrl+"/update")
        
        console.log(title,content,imgUrl)
        $('.cms_table').hide();
        $('.cms_edit').show();
    });
    $(".news_btn_submit").on('click',function(e) {
        if(!$(".news_update_img").children("input").val()){
            e.preventDefault();
            alert('請上傳圖片')
        }
    })
    $(".news_btn_create").on('click',function () {
        $(".news_update_form").attr("action","/news");
        $(".news_update_img img").hide();
        $('.cms_table').hide();
        $('.cms_edit').show();
    })
    $(".btn-cansel").on('click',function (){
        $('.cms_table').show();
        $('.cms_edit').hide();
    })
    $(".news_delete button").on('click',function() {
        console.log(`delete`)
    })
})