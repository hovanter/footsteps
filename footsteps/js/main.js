$(document).ready(function() {
  $('.filter-icon').click(function() {
  		if($('.filter-bar').hasClass('slide-up')) {
  	 		$('.filter-bar').addClass('slide-down', 1000, 'easeOutExpo');
  	 		$('.filter-bar').removeClass('slide-up', 1000, 'easeOutExpo');

  	 		//$('.filter-container').addClass('slide-up-container', 1000, 'easeOutExpo');
  	 		$('.filter-container').removeClass('slide-up-container', 1000, 'easeOutExpo');

  	 		$('.filter-icon').removeClass('icon-down-nav');
  	 		$('.filter-icon').addClass('icon-up-nav');
  	 	} else {
  	 		$('.filter-container').addClass('slide-up-container', 1000, 'easeOutExpo');
  	 		//$('.filter-container').removeClass('slide-down-container', 1000, 'easeOutExpo');

  	 		$('.filter-bar').addClass('slide-up', 1000, 'easeOutExpo');
  	 		$('.filter-bar').removeClass('slide-down', 1000, 'easeOutExpo');

  	 		$('.filter-icon').removeClass('icon-up-nav');
  	 		$('.filter-icon').addClass('icon-down-nav');
  	 	}
  });
});