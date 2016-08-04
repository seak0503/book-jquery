$(function () {
  $('p').on('mouseenter', function () {
    $(this).css('outline', '1px solid gold');
  })
  .on('mouseleave', function () {
    $(this).css('outline', 'none');
  });
  $('input[type=text]').on('focus', function () {
    $(this).css('background-color', 'orange');
  })
  .on('blur', function () {
    $(this).css('background-color', 'transparent');
  });
  $('table').find('td').on('click', function () {
    var $this = $(this);
    $this.closest('table').find('td')
    .css('background-color', 'transparent');
    $this.css('background-color', 'lightblue');
  });
  $('input[type=checkbox]').on('change', function () {
    var $this = $(this);
    $this.parent().css('color', 'black');
    $this.filter(':checked').parent().css('color', 'gold');
  });
  $('input[type=radio]').on('change', function () {
    var $parent = $(this).parent();
    $parent.siblings().css('color', 'black');
    $parent.css('color', 'gold');
  });
  $('#unordered').find('li').on('click', function () {
    var $this = $(this);
    var count = $this.data('count') + 1;
    var newString = 'このリストを' + count + '回クリックしました。';

    $this
    .data('count', count)
    .text(newString);
  });
  $('#ordered').find('li').on('click', function () {
    var $element = $('<li>追加された序列リスト項目</li>');
    $(this).after($element);
  });
});