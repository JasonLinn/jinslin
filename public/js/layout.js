/*************/
/****header****/
/*************/
$('#menuHam').on('change',function(){
  $('ul.menu').toggleClass('active');
})

$(window).on('scrollstart', function() {
    $('header#header').stop(true, false).animate({ 'top': '-100px', 'opacity': 0 }, 100);
});

$(window).bind('scrollstop', function(e) {
    $('header#header').stop(true, false).animate({ 'top': '0px', 'opacity': 1 }, 500);
});



/*************/
/****index****/
/*************/

$('#page-index .newsbox .contentbox').mCustomScrollbar({
  axis: "y"
})



/*************/
/****news****/
/*************/

$('#page-news .morebtn').click(function(){
  let title = $(this).parent().children("div:first-child").text();
  let date = $(this).parent().children("div:nth-child(2)").text();
  let content = $(this).parent().children("div:nth-child(3)").text();
  let imgURL = $(this).parent().children("input").val();
  console.log(title,date,imgURL)
  fixedBody();
  $('#popNewsDetail').show();
  $('#popNewsDetail .title').text(title);
  $('#popNewsDetail .date').text(date);
  $('#popNewsDetail .content .text').text(content);
  $('#popNewsDetail .content .pic').children("img").attr("src",imgURL);

})

$('#popNewsDetail .popbg').click(function(){
  looseBody();
  $('#popNewsDetail').hide();
})
$('#popNewsDetail .closebtn').click(function(){
  looseBody();
  $('#popNewsDetail').hide();
})

$('#popNewsDetail .popcontent').mCustomScrollbar({
  axis: "y"
})

/*************/
/****tours****/
/*************/

$('#page-tours .morebtn').click(function(){
  fixedBody();
  $('#popTourDetail').show();
})


$('#popTourDetail .popbg').click(function(){
  $('#popTourDetail').hide();
  looseBody();
})
$('#popTourDetail .closebtn').click(function(){
  $('#popTourDetail').hide();
  looseBody();
})

$('#popTourDetail .popcontent').mCustomScrollbar({
  axis: "y"
})



//*******************/
//******固定背景*****/
//******************/
function fixedBody() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  document.body.style.cssText += 'position:fixed;top:-' + scrollTop + 'px;';
}

function looseBody() {
  var body = document.body;
  body.style.position = 'relative';
  var top = body.style.top;
  document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top);
  body.style.top = '';
}
