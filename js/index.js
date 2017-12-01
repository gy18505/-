
$(function(){
  $('.navbar-mobile .menu-list>li').has('.sublist').hover(function () {
    $(this).css('height', '200px');
  }, function () {
    $(this).removeAttr('style');
  }).click(function (e) {
    e ? e.preventDefault() : window.event.returnValue = false;
    $(this).css('height', '200px').siblings().removeAttr('style');
  });
  $('.navbar-menu .menu-list>li').has('.sublist').hover(function () {
    $(this).find('.sublist').fadeIn();
  }, function () {
    $(this).find('.sublist').fadeOut();
  })
  new WOW().init();
  new Rellax('.rellax');
})


