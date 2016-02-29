$(document).ready(function() {

    // Wire up chevron to show/hide filter menu.
    $('#sidebar-handle-icon').click(function() {
		if (isSidebarVisible()) { 
	 		hideSidebar();
	 	} else {
            setSidebarContent('filters.html');
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