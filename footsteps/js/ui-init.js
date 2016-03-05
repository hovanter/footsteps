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

    // Wire up drop button to show marker menu popup.
    var dropButton = $('.action-container:nth-child(2)');
    dropButton.click(function() {
        setPopupContent('drop-options.html')
        showPopup(70);
    });

    // Wire up record button to switch between play/stop icons.
    var recordButton = $('.action-container:first-child .action-button');
    recordButton.click(function() {

        dropButton.toggle();

        if(recordButton.hasClass('icon-stop')) {
            recordButton.removeClass('icon-stop');
            recordButton.addClass('icon-play');
            $('.action-container:first-child').removeAttr('id');

            // dropButton.addClass('');
        } else {
            recordButton.removeClass('icon-play');
            recordButton.addClass('icon-stop'); 
            $('.action-container:first-child').attr('id', 'isRecording');

            // dropButton.removeClass('');   
        }
    });

    // Wire up locate user button.
    var locateUserButton = $('#locate-user-button');
    locateUserButton.click(function() {
        panToUserLocation();
    });

    // Wire up traveller profile pic (route info panel) to profile page.
    $('.traveller-profile-pic').click(function() {

    });

    // Slick init scripts.
    $('.slide-group').slick({dots: true});
    $('.slide-group button').remove(); 
});