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