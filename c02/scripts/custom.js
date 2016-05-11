/**
 * 02-01　開閉するボックス
 */
$(function() {
  $('.nav-info')
  .on('click', function() {
    $('.wrapper-headerinfo').slideToggle(400);
  });
});

/**
 * 02-02　レスポンシブなナビゲーション
 */
$(function() {
  $(window)
  .on('resize', function() {
    var $nav = $('.nav-global');
    var listFloat = $nav.find('li').css('float');
    if (listFloat == 'none') {
      $nav.css('display', 'none');
    } else {
      $nav.css('display', 'block');
    }
  });

  $('.menubtn > a')
  .on('click', function() {
    $('.nav-global').slideToggle(400);
  });
});

/**
 * 02-03　コンテンツを切り替えるタブ
 */
$(function() {
  $('.tab-menu')
  .on('click', 'li > a', function(event) {
    event.preventDefault();
    var $this = $(this);

    //ボタンのアピアランスを変更する
    $this.parent().siblings()
    .removeClass('selected')
    .end()
    .addClass('selected');

    //コンテンツを切り替える
    var tabId = $this.data('tabid');
    $this.closest('.tab').find('.tab-contents').children()
    .each(function() {
      var $content = $(this);
      if ($content.data('contentid') == tabId) {
        $content.removeClass('hidden');
      } else {
        $content.addClass('hidden');
      }
    });
  });
});

/**
 * 02-04　簡易的なイメージギャラリー
 */
 $(function() {
  function preloadImage(path) {
    $('<img>').attr('src', path);
  }

  $('.thumbnails').on('click', 'li > a', function(event) {
    event.preventDefault();
    var $this = $(this);

    //ボタンのアピアレンスを変更する
    $this.parent().siblings()
    .removeClass('selected')
    .end()
    .addClass('selected');

    //イメージを差し替え
    var imagePath = $this.data('img');
    $('.gallery .mainimage img').attr('src', imagePath);
  })
  .children('li').each(function() {
    var imgPath = $(this).children('a').data('img');
    preloadImage(imgPath);
  });
});