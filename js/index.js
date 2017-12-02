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

  var mySwiper = new Swiper ('.banner', {
    direction: 'horizontal',
    loop: true,     
    effect : 'fade',
    fade: {
      crossFade: true,
    },
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
      swiperAnimateCache(swiper); //隐藏动画元素 
      swiperAnimate(swiper); //初始化完成开始动画
    }, 
    onSlideChangeEnd: function(swiper){ 
      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    } 
  })       
})