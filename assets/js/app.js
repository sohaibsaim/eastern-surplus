$(document).ready(function() {
	
	$('#search-btn').on("click", function (e) {
		e.preventDefault();
		$('.searchform-container').removeClass('hide');
		$('#header_one').addClass('hide');
	});
	
	$('#searchform .close-btn').on("click", function() {
		$('.searchform-container').addClass('hide');
		$('#header_one').removeClass('hide');
	});
	
	$('.hamburger-menu #search-btn').on("click", function (e) {
		e.preventDefault();
		$('.searchform-container').removeClass('hide');
		$('#header_one').addClass('hide');
	});
	
	$('.wpcf7').addClass("col-12");
  
	$('.hamburger-menu').hide();
	$('.hamburger-menu').addClass("inactive");
	$('.toggler-icon').on('click', function(e) {
		e.preventDefault();
		if( $(this).hasClass('active') ){
			$(this).removeClass("active");
			$(this).addClass("inactive");
			$('.hamburger-menu').hide();
		} else {
			$(this).removeClass("inactive");
			$(this).addClass("active");
			$('.hamburger-menu').show();
		}	
	});

});