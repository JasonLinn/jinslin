/*************/
/****header****/
/*************/
$('#menuHam').on('change',function(){
  $('ul.menu').toggleClass('active');
})

$(window).on('scrollstart', function() {
    $('header#header').stop(true, false).animate({ 'top': '-100px', 'opacity': 0 }, 100);
    // alert(123)
});

$(window).bind('scrollstop', function(e) {
    $('header#header').stop(true, false).animate({ 'top': '0px', 'opacity': 1 }, 500);
});


/*************/
/****news****/
/*************/

$('#page-news .morebtn').click(function(){
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

/*************/
/****tours****/
/*************/

$('#page-tours .morebtn').click(function(){
  $('#popTourDetail').show();
})


$('#popTourDetail .popbg').click(function(){
  $('#popTourDetail').hide();
})
$('#popTourDetail .closebtn').click(function(){
  $('#popTourDetail').hide();
  let title = $(this).parent().children("div:first-child").text();
  let date = $(this).parent().children("div:nth-child(2)").text();
  let content = $(this).parent().children("div:nth-child(3)").text();
  let imgURL = $(this).parent().children("input").val();
  console.log(title,date,imgURL)
  $('#popTourDetail').show();
  $('#popTourDetail .title').text(title);
  $('#popTourDetail .date').text(date);
  $('#popTourDetail .content .text').text(content);
  $('#popTourDetail .content .pic').children("img").attr("src",imgURL);
})
