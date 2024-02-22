$(function () {
  $('.m-rank-list .item').hover(function () {
    $(this).addClass('z-cur').siblings('.item').removeClass('z-cur');
  });

  $('.link-tab span').hover(function () {
    $(this).addClass('z-cur').siblings().removeClass('z-cur');
    $('.common-classify-partner .link-list').eq($(this).index()).show().siblings('.link-list').hide();
  });

  $('.common-classify-swr .sort-box .third-tt-item').hover(function () {
    $(this).addClass('z-cur').siblings().removeClass('z-cur');
    $(this).parents('.head').siblings('ul').addClass('hide').siblings('ul');
    $(this).parents('.head').siblings('ul').eq($(this).index()).removeClass('hide').addClass('show');
  });

  var tags_a = $('#tags a');
  tags_a.each(function () {
    var x = 11;
    var y = 0;
    var rand = parseInt(Math.random() * (x - y + 1) + y);
    $(this).addClass('tags' + rand);
  });
});

$(".hd ul").find("li").each(function() {
  $(this).hover(function() {
      $(this).addClass('on').siblings().removeClass('on');
      $(".bd .lh").eq($(this).index()).show().siblings().hide();
  });
});
