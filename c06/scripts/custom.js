/**
  * 06-01 カルーセル
 */
$(function () {
  $('#carousel').carousel();
  $('img[data-imgpath]').each(function () {
    $(this).preloadImage();
  });
});

/**
 * 06-02　大きな画像を表示する
 */
$(function () {
  $('.thumbs-list')
  .on('click', 'li', function () {
    var $this = $(this);
    var myIndex = $this.prevAll().length;
    /* サムネイルのハイライト */
    $this
    .closest('.thumbs').find('li')
    .removeClass('selected')
    .end()
    .children('.thumbs-list').each(function () {
      $(this).children('li').eq(myIndex).addClass('selected');
    });
    var $img = $this.find('img');
    changeImage($img.data('imgpath'));
    changeCaption($this.data('caption'));
  });

  /* キャプションを表示する */
  function changeCaption(caption) {
    $('.gallery').find('.caption')
    .stop()
    .animate({'text-indent':-50, 'opacity':0},
    {
      duration: 400,
      complete: function () {
        $(this)
        .text(caption)
        .css({'text-indent':50})
      }
    })
    .animate({'text-indent':0, 'opacity':1});
  }

  /* 画像を切り替える */
  function changeImage(path) {
    var $image = $('<img>').attr('src', path);
    $('.mainimage').append($image);
    $image.siblings('img').stop();
    $image.animate({opacity: 1},
    {
      duration: 1000,
      complete: function () {
        $(this)
        .addClass('front')
        .siblings('img')
        .remove();
      }
    });
  }
});