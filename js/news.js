$(function(){
  var i_now=1;
  $('.btn').click(function(){$(this).blur()})
  $('.btn','.news-pagination').eq(i_now).addClass('active')
  .end().click(function(){
    var $this=$(this);
    if($this.hasClass('disabled')) return;
    i_now=$('.btn','.news-pagination').index($this);
    $('.news-pagination').find('.btn').removeClass('active');
    $('.btn','.news-pagination').eq(i_now).addClass('active')
    var sbl=$this.siblings(),id=$this.index();
    $this.parent().hasClass('pagination-more')?(id==sbl.length?($('.next','.news-pagination').addClass('disabled')):($('.next','.news-pagination').removeClass('disabled'))):(id==1?(sbl.first().addClass('disabled')):(sbl.first().removeClass('disabled')));
    if($this.hasClass('more')){
      $('.pagination-more').slideToggle().children('.btn').each(function(i,e){
        (function(_i,_e){
          setTimeout(function(){
            $(_e).fadeToggle().toggleClass('animated bounceInLeft');
          }, $(_e).siblings('.btn').length*300-_i*300)
        })(i,e)
      });
      $('.pagination-more').toggleClass('active');
    }
    else{
      if($this.parent().hasClass('pagination-more')) return;
      if($('.pagination-more').hasClass('active')){
        $('.pagination-more').slideUp().removeClass('active').children('.btn').hide().removeClass('animated bounceInLeft')
      }
    }
  })
  $('.btn','.news-menu').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})