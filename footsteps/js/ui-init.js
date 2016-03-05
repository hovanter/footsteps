$(document).ready(function() {
    console.log('hello')
    // Wire up chevron to show/hide filter menu.
    $('#sidebar-handle-icon').click(function() {
		if (isSidebarVisible()) { 
	 		hideSidebar();
	 	} else {
            setSidebarContent('filters.html');
	 		showSidebar(270);
	 	}
    });

    // Wire up drop button to show marker menu popup.
    $('#drop-button').click(function() {
        setPopupContent('drop-options.html')
        showPopup(70);
    });

    // Wire up record button to switch between play/stop icons.
    $('#recording-button').click(function() {
        if ($('#recording-button').hasClass('icon-stop')) {
            $('#recording-button').removeClass('icon-stop');
            $('#recording-button').removeClass('isRecording');
            $('#recording-button').addClass('icon-play');
            $('#drop-button').hide();
        } else {
            $('#recording-button').removeClass('icon-play');
            $('#recording-button').addClass('icon-stop');
            $('#recording-button').addClass('isRecording'); 
            $('#drop-button').show();
        }
    });

    // Wire up locate user button.
    $('#locate-user-button').click(function() {
        panToUserLocation();
    });
});