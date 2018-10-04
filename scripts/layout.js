
$(document).ready(function(){
	jQuery('#mycarousel-works').jcarousel({
        scroll: 3
    });	
	
	$('.fancybox').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',

		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,

		helpers : {
			title : {
				type : 'inside'
			},
			buttons	: {}
		},

		afterLoad : function() {
			this.title = 'Изображение ' + (this.index + 1) + ' из ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});

    $('.operator-mini-photo a').hover(function() {
			$(this).find('ins').stop(true, true).fadeIn();
    	}, function() {
			$(this).find('ins').stop(true, true).fadeOut();
    });		
	

	$('.search-form p a').click(function(){	
		var value_a = $(this).attr('title');
		$(this).parent().parent().find('input.pole').val(value_a);
		
		return false;
	});		

	$('.button-order').click(function() {
		$('#basic-modal-order').modal({overlayClose:true});
		return false;
	});	
	$('.modal-form-close').click(function(){
		$.modal.close(); 
	});		
	
});// конец ready function
