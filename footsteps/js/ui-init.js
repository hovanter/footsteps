$(document).ready(function() {

    // Wire up chevron to show/hide filter menu.
    $('.filter-icon').click(function() {
		if (isSidebarVisible()) {
            $('.filter-icon').removeClass('icon-down-nav');
            $('.filter-icon').addClass('icon-up-nav');
            $('.filter-container').removeClass('slide-up-container', 1000, 'easeOutExpo'); 
	 		hideSidebar();
	 	} else {
            setSidebarContent('filters.html');
            $('.filter-icon').removeClass('icon-up-nav');
            $('.filter-icon').addClass('icon-down-nav');
            $('.filter-container').addClass('slide-up-container', 1000, 'easeOutExpo');
	 		showSidebar(260);
	 	}
    });

    // Wire up record button to switch between play/stop icons.
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

    var dropButton = $('.action-container:nth-child(2)');
    console.log(dropButton)
    dropButton.click(function() {
        console.log('helloooo')
        setPopupContent('drop-options.html')
        showPopup(200);
    });

    // Slick init scripts.
    $('.slide-group').slick({dots: true});
    $('.slide-group button').remove(); 
});