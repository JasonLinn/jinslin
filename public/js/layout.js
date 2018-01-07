/*************/
/****header****/
/*************/
$('#menuHam').on('change', function() {
  $('ul.menu').toggleClass('active');
});

switchToMobileLogoIcon();
$(window).resize(function() {
  switchToMobileLogoIcon();
});
function switchToMobileLogoIcon() {
  if ($(window).width() < 769) {
    $('header#header .logo img')
      .attr('src', 'images/jinrilin-white.png')
      .css('width', '40%');
  }
}

// $(window).on('scrollstart', function() {
//   $('header#header').stop(true, false).animate({
//     'top': '-100px',
//     'opacity': 0
//   }, 100);
// });
//
// $(window).bind('scrollstop', function(e) {
//   $('header#header').stop(true, false).animate({
//     'top': '0px',
//     'opacity': 1
//   }, 500);
// });

/*************/
/****index****/
/*************/

$('#page-index .newsbox .contentbox').mCustomScrollbar({ axis: 'y' });

/*************/
/****news****/
/*************/

$('#page-news .morebtn').click(function() {
  let title = $(this)
    .parent()
    .children('div:first-child')
    .text();
  let date = $(this)
    .parent()
    .children('div:nth-child(2)')
    .text();
  let content = $(this)
    .parent()
    .children('div:nth-child(3)')
    .text();
  let imgURL = $(this)
    .parent()
    .children('input')
    .val();
  console.log(title, date, imgURL);
  // fixedBody();
  stopScroll();
  $('#popNewsDetail').show();
  $('#popNewsDetail .title').text(title);
  $('#popNewsDetail .date').text(date);
  $('#popNewsDetail .content .text').text(content);
  $('#popNewsDetail .content .pic')
    .children('img')
    .attr('src', imgURL);
});

$('#popNewsDetail .popbg').click(function() {
  // looseBody();
  startScroll();
  $('#popNewsDetail').hide();
});
$('#popNewsDetail .closebtn').click(function() {
  // looseBody();
  startScroll();
  $('#popNewsDetail').hide();
});

$('#popNewsDetail .popcontent').mCustomScrollbar({ axis: 'y' });

/*************/
/****tours****/
/*************/

$('#page-tours .morebtn').click(function() {
  stopScroll();
  $('#popTourDetail').show();
});

$('#popTourDetail .popbg').click(function() {
  startScroll();
  $('#popTourDetail').hide();
});
$('#popTourDetail .closebtn').click(function() {
  startScroll();
  $('#popTourDetail').hide();
});

$('#popTourDetail .popcontent').mCustomScrollbar({ axis: 'y' });

function preventDefaultHandler(e) {
  e.preventDefault();
}

function startScroll() {
  document.removeEventListener('mousewheel', preventDefaultHandler, false);
  document.removeEventListener('DOMMouseScroll', preventDefaultHandler, false); //firefox
}

function stopScroll() {
  document.addEventListener('mousewheel', preventDefaultHandler, false);
  document.addEventListener('DOMMouseScroll', preventDefaultHandler, false);
}

//*******************/
//******固定背景*****/
//******************/
// function fixedBody() {
//   var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//   document.body.style.cssText += 'position:fixed;top:-' + scrollTop + 'px;';
// }

// function looseBody() {
//   var body = document.body;
//   body.style.position = 'relative';
//   var top = body.style.top;
//   document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top);
//   body.style.top = '';
// }

//*******************/
//******滾動特效*****/
//******************/
//
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 100, // default
  mobile: true, // default
  live: true // default
});
wow.init();
// console.log(wow)
