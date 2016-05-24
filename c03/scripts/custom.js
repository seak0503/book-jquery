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

/**
 * 03-05 animate()を使った高度なアニメーション
 */
$(function() {
  var value = 0.5;

  $('.third')
  .on('mouseenter mouseleave', '.btn-action', function (event) {
    event.preventDefault();
    var opacityValue;
    if (event.type == 'mouseenter') {
      opacityValue = value;
    } else {
      opacityValue = 1;
    }

    $(this).find('img')
    .animate(
      {opacity:opacityValue},
      {
        duration:500,
        step:function(now, tween){
          var rotate = 'rotate(' + (1 - now) * (360 / value) + 'deg)';
          $(this)
          .css({
            '-webkit-transform':rotate,
            'transform':rotate
          });
        }
      }
    );
  })
  .each(function() {
    try {
      event = document.createEvent('TouchEvent');
      $(this)
      .off('mouseenter')
      .off('mouseleave')
    } catch(err) {
    }
  });
});

/**
 * 03-06 スライドショー
 */
$(function() {
  var intervalId;
  setTimer();

  function setTimer() {
    intervalId = setInterval(autoClick, 5000);
  }

  function autoClick() {
    $('.slide').children('a.next').click();
  }

  function changeImage($click) {
    //console.log($click);
    var $current = $click.siblings('.container').children('.current');
    var $new;
    var findSelector = '';

    if ($click.hasClass('next')) {
      $new = $current.next();
      findSelector = ':first-child';
    } else {
      $new = $current.prev();
      findSelector = ':lst-child';
    }

    if ($new.length == 0) {
      $new = $current.siblings(findSelector);
    }
    $current.removeClass('current');
    $new.addClass('current');
    setTimer();
  }

  $('.slide')
  .on('click', '> a', function(event) {
    event.preventDefault();
    event.stopPropagation();
    clearInterval(intervalId);
    changeImage($(this));
  });
});

/**
 * 03-07 Ajaxの基礎
 */
$(function() {
  $('#fetch').on('click', function(event) {
    event.preventDefault();
    $this = $(this);
    var ajaxUrl = $this.attr('href');

    if(ajaxUrl != '#'){
      $.get(ajaxUrl, function(data) {
        //console.dir(data);
        var $insertImg = $('<img>').attr('src', data.img);
        var $insertText = $('<p></p>').text(data.article);
        var $list = $('<li></li>')
          .prepend($insertImg)
          .prepend($insertText)
          .css({"opacity":0});

        $('#ajax-list').append($list);
        $list.animate({'opacity':1}, 400);
        //リンク先を変更して読み込むデータファイルを変える
        if (data.next == "") {
          $this
          .attr('href', '#')
          .addClass('disabled')
        } else {
          $this
          .attr('href', data.next)
        }
      });
    }
  });
});