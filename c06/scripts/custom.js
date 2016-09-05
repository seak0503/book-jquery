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
  });
});