$(function() {
  $('.nav-info')
  .on('click', function() {
    $('.wrapper-headerinfo').slideToggle(400);
  });
});

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