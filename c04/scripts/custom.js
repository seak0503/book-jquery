/**
 * 04-01　モーダルウィンドウ
 */
$(function(){
	function showModal() {
		var $shade = $('<div></div>');
		$shade
		.attr('id', 'shade')
		.on('click', hideModal);
		
		var $modalWin = $('#modalwin');
		var posX = ($(window).width() - $modalWin.outerWidth()) / 2;
		var posY = ($(window).height() - $modalWin.outerHeight()) / 2;
		
		$modalWin
		.before($shade)
		.css({left: posX, top: posY})
		.removeClass('hide')
		.addClass('show');
		
		$modalWin
		.on('click', '.modal-close', function() {
			hideModal();
		})
		.on('click', 'button', function() {
			/*
			 some function
			 */
			hideModal();
		})
		
	};
	
	function hideModal() {
		$('#shade').remove();
		$('#modalwin')
		.removeClass('show')
		.addClass('hide');
	};

	$('.show-modal').on('click', showModal);
	
	
});