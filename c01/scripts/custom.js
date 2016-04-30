$(function() {
  $('p').on('click', function() {
    $(this).css('outline', '1px solid gold');
  });
  $('ul').css('background-color', 'yellowgreen');
  $('#ordered').css('background-color', 'wheat');
  $('.external').css('text-decoration', 'none');
  $('form p').css('border-bottom', '1px solid #ddd');
  $('tr:nth-child(even)').css('background-color', 'lightblue');
  $('input[type=text]').css('background-color', 'orange');
  $('h1, h2').css('color', 'steelblue');
});