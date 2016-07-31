/**
 * 06-03　カルーセルのプラグインを作成する
 * 06-04　プリロードのプラグインを作成する
 * 06-05　プラグインを別ファイルにする
 */
$.fn.extend({
  carousel:function(){
    var $carousel = $(this);
    $carousel
    .find('.thumbs-list').each(function () {
      var $this = $(this);

      //#carouselの幅を設定
      var listWidth = $this.outerWidth() * 2;
      $this.parent().width(listWidth);

      //thumbs-listをクローン
      $this.clone().insertAfter($this);
    })
    .end()
    .on('click', 'a.prev', function (event) {
      event.preventDefault();
      doCarousel($(this), 1);
    })
    .on('click', 'a.next', function (event) {
      event.preventDefault();
      doCarousel($(this), -1);
    });

    /* カルーセルアニメーションを実行する関数 */
    function doCarousel(btn, direction) {
      var $btn = btn;
      //var $carousel = $btn.closest('.carousel');
      var $imgContainer = $carousel.find('.thumbs');

      //移動量を計算
      var move = direction * $carousel.width() + $imgContainer.position().left;

      $imgContainer.filter(':not(:animated)')
      .animate({left: move},
      {
        duration:800,
        progress:function () {
          var $this = $(this);
          var $imgList = $this.find('.thumbs-list').first();

          //移動量がthumbs-listの幅を上回ったら.thumbsのポジションをリセット
          var resetPos;
          //[<]がクリックされたとき
          if (direction == 1 && 0 <= $this.position().left) {
            resetPos = $this.position().left - $imgList.outerWidth();
            $this.css({"left": resetPos});
          }
          //[>]がクリックされたとき
          if (direction == -1 && $imgList.outerWidth() <= Math.abs($this.position().left)) {
            resetPos = $this.position().left + $imgList.outerWidth();
            $this.css({"left": resetPos});
          }
        }
      });
    }
  },
  preloadImage:function () {
    var $this = $(this);
    if ($this.data('imgpath')) {
      var path = $this.data('imgpath');
      $('<img>').attr('src', path)
    }
  }
});