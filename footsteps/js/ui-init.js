$(document).ready(function() {

    /* Wire up interface button actions. */
    $('.filter-icon').click(function() {
        setSidebarContent('#filters')
		if (isSidebarVisible()) {
            $('.filter-icon').removeClass('icon-down-nav');
            $('.filter-icon').addClass('icon-up-nav');
            $('.filter-container').removeClass('slide-up-container', 1000, 'easeOutExpo'); 
	 		hideSidebar();
	 	} else {
            $('.filter-icon').removeClass('icon-up-nav');
            $('.filter-icon').addClass('icon-down-nav');
            $('.filter-container').addClass('slide-up-container', 1000, 'easeOutExpo');
	 		showSidebar(260);
	 	}
    });

    /* Slack init scripts. */
    $('.slide-group').slick({dots: true});
    $('.slide-group button').remove(); 

    var recordButton = $('.action-container:first-child .action-button');

    recordButton.click(function() {
    	if(recordButton.hasClass('icon-stop')) {
    	 	recordButton.removeClass('icon-stop');
    		recordButton.addClass('icon-play');
    		$('.action-container:first-child').removeAttr('id');
    	} else {
    	 	recordButton.removeClass('icon-play');
    		recordButton.addClass('icon-stop'); 
    	$('.action-container:first-child').attr('id', 'isRecording'); 	
    	}
    });
    
});