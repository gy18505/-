$(function () {
  var _timer;

  // animation init
  new WOW().init();
  // vision init
  new Rellax('.rellax');

  // service-logo hover
  $('.service-logo').hover(function () {
    var $logo = $(this).children('img').eq(0).css({
      'transform': 'rotate(45deg)',
      '-webkit-transform': 'rotate(45deg)',
      '-moz-transform': 'rotate(45deg)',
      '-ms-transform': 'rotate(45deg)',
      '-o-transform': 'rotate(45deg)'
    });
    _timer = setTimeout(function () {
      $logo.attr('src', 'images/' + $logo.data('logo') + '-transparent.png');
    }, 100);
  }, function () {
    clearTimeout(_timer);
    var $logo = $(this).children('img').eq(0).removeAttr('style');
    _timer = setTimeout(function () {
      $logo.attr('src', 'images/' + $logo.data('logo') + '.png');
    }, 100);
  });
  var timer;
  var mySwiper = new Swiper ('.banner', {
    // autoplay : 5000,
    direction: 'horizontal',
    effect : 'slide',
    parallax: true,
    onInit: function(swiper){ 
      swiperAnimateCache(swiper); 
      swiperAnimate(swiper);
    }, 
    onSlideChangeEnd: function(swiper){ 
      swiperAnimate(swiper);
    }
  })       
})