$(function () {
  $('.sw-column-tab a').hover(function () {
    $(this).addClass('z-cur').siblings().removeClass('z-cur');
    $('.sw-column ul').eq($(this).index()).show().siblings('ul').hide();
  });

  $('.kind-tab span').hover(function () {
    $(this).addClass('z-cur').siblings().removeClass('z-cur');
    $('.common-classify-updates .updates-list').eq($(this).index()).show().siblings('.updates-list').hide();
  });

  $('.g-side a').click(function () {
    var anchor = $(this).attr('data');
    if (anchor == '') {
      return false;
    }
    $('body,html')
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top
        },
        400
      );
    return false;
  });

  $(window).scroll(function () {
    var scrollTop = $(document).scrollTop();
    $('.side-item').each(function (i, v) {
      if (scrollTop > parseInt($(v).offset().top) - 100) {
        $('.u-side-item').removeClass('z-cur');
        $('[data-nav=' + i + ']').addClass('z-cur');
      }
    });
  });

  $('.g-side span').click(function () {
    $('html,body').animate(
      {
        scrollTop: 0
      },
      700
    );
  });
});

jQuery('.m-slide').slide({ mainCell: '.bd ul', autoPlay: true});
