jQuery(
  (function ($) {
    'use strict';
    // Mean Menu
    jQuery('.mean-menu').meanmenu({
      meanScreenWidth: '1199',
    });
  })(jQuery)
);
$(window).on('load', function () {
  wow = new WOW({
    animateClass: 'animated',
    offset: 100,
  }).init();
});
$(document).ready(function () {
  // add all to same gallery
  $('.gallery-ul a').attr('data-fancybox', 'mygallery');
  // assign captions and title from alt-attributes of images:
  $('.gallery-ul a').each(function () {
    $(this).attr('data-caption', $(this).find('img').attr('alt'));
    $(this).attr('title', $(this).find('img').attr('alt'));
  });
  // start fancybox:
  $('.gallery-ul a').fancybox({
    arrows: true,
    loop: true,
    animationEffect: true,
  });
  setTimeout(function () {
    $('.loading-wrapper').css({ display: 'none' });
  }, 1000);
});
