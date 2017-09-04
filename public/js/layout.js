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
  $('#popNewsDetail').show();
})

$('#popNewsDetail .popbg').click(function(){
  $('#popNewsDetail').hide();
})
$('#popNewsDetail .closebtn').click(function(){
  $('#popNewsDetail').hide();
})
