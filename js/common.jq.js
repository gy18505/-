$(function(){
  // navbar on mobile hover
  $('.navbar-mobile .menu-list>li').has('.sublist').hover(function () {
    $(this).css('height', '200px');
  }, function () {
    $(this).removeAttr('style');
  }).click(function (e) {
    e ? e.preventDefault() : window.event.returnValue = false;
    $(this).css('height', '200px').siblings().removeAttr('style');
  });
  // menu-list hover
  $('.navbar-menu .menu-list>li').has('.sublist').hover(function () {
    $(this).find('.sublist').fadeIn();
  }, function () {
    $(this).find('.sublist').fadeOut();
  });
})
