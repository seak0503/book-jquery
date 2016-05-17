/**
 * 03-01　アコーディオン
 */
 $(function() {
   $('.accordion').on('click', 'li', function() {
     var $this = $(this);
     //コンテンツを開く
     $this
     .toggleClass('expanded')
     .children('.content')
     .slideToggle('fast')
     .end()
     .siblings()
     .removeClass('expanded')
     .children('.content')
     .slideUp('falt');
   });
 });

/**
 * 03-02　ドロップダウンメニュー
 */
$(function() {
  $('.dropdown-menu').children('a')
  .on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var $this = $(this);

      //複数のドロップダウンメニューがあるときの対策
      $this.parent().siblings('li').children('a')
      .removeClass('open')
      .next().hide();

      if ($this.hasClass('open')) {
          $this.removeClass('open')
          .next().hide();
          $('html').off('click', closeItems);
      } else {
          $this.addClass('open')
          .next().show();
          $('html').on('click', closeItems);
      }

      function closeItems() {
          $this.removeClass('open')
          .next().hide();
      }
  });
});

/**
 * 03-03 CSSを操作するアニメーション
 */
$(function() {
  $('.first')
  .on('mouseenter', '.btn-action', function(event) {
    event.preventDefault();
    $(this).find('img')
    .addClass('animate');
  })
  .on('mouseleave', '.btn-action', function(event) {
    event.preventDefault();
    $(this).find('img')
    .removeClass('animate');
  });
});

/**
 * 03-04 連続アニメーション
 */
$(function() {
  $('.second')
  .on('mouseenter', '.btn-action', function(event) {
    event.preventDefault();
    $(this).find('img')
    .animate({'opacity':0.5}, 300)
    .animate({'opacity':1}, 500);
  })
  .on('mouseleave', '.btn-action', function(event) {
    event.preventDefault();
    $(this).find('img')
    .animate({'opacity':1}, 300);
  });
});