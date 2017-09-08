/*************/
/****header****/
/*************/
$('#menuHam').on('change',function(){
  $('ul.menu').toggleClass('active');
})



/*************/
/****news****/
/*************/

$('.morebtn').click(function(){
  let title = $(this).parent().children("div:first-child").text();
  let date = $(this).parent().children("div:nth-child(2)").text();
  let content = $(this).parent().children("div:nth-child(3)").text();
  let imgURL = $(this).parent().children("input").val();
  console.log(title,date,imgURL)
  $('#popNewsDetail').show();
  $('#popNewsDetail .title').text(title);
  $('#popNewsDetail .date').text(date);
  $('#popNewsDetail .content .text').text(content);
  $('#popNewsDetail .content .pic').children("img").attr("src",imgURL);

})

$('#popNewsDetail .popbg').click(function(){
  $('#popNewsDetail').hide();
})
$('#popNewsDetail .closebtn').click(function(){
  $('#popNewsDetail').hide();
})
