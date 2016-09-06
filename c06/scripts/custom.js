$(function () {
  /**
   * 06-01 カルーセル
   */
  $('#carousel')
  .find('.thumbs-list').each(function () {
    var $this = $(this);

    //#carouselの幅を設定
    var listWidth = $this.outerWidth() * 2;
    $this.parent().width(listWidth);

    //thumbs-listをクローン
    $this.clone().insertAfter($this);
  })
  .end()
  .on('click', 'a.prev', function(event){
    event.preventDefault();
    doCarousel($(this), 1);
  })
  .on('click', 'a.next', function(event){
    event.preventDefault();
    doCarousel($(this), -1);
  });

  /* カルーセルアニメーションを実行する関数 */
  function doCarousel(btn, direction) {
    var $btn = btn;
    var $carousel = $btn.closest('.carousel');
    var $imgContainer = $carousel.find('.thumbs');

    //移動量を計算
    var move = direction * $carousel.width() + $imgContainer.position().left;

    $imgContainer.filter(':not(:animated)')
    .animate({left: move},
      {
        duration:800
      });
   }
});