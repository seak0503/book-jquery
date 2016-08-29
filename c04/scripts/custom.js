/**
 * 04-01　モーダルウィンドウ
 */
$(function () {
  //モーダルウィンドウを開く
  function showModal(event) {
    event.preventDefault();

    var $modalWin = $('#modalwin');
    var $window = $(window);
    var posX = ($window.width() - $modalWin.outerWidth()) / 2;
    var posY = ($window.height() - $modalWin.outerHeight()) / 2;

    $modalWin
    .css({left: posX, top: posY})
    .removeClass('hide')
    .addClass('show')
    .on('click', 'button', function () {
      hideModal();
    });
  }
  //モーダルウィンドウを閉じる
  function hideModal() {
    $('#modalwin')
    .removeClass('show')
    .addClass('hide');
  }

  $('.show-modal').on('click', showModal);
});