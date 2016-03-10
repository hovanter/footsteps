$(document).ready(function() {
    console.log('hello')
    // Wire up chevron to show/hide filter menu.
    $('#sidebar-handle-icon').click(function() {
		if (isSidebarVisible()) { 
	 		hideSidebar();
	 	} else {
            showSidebar('filters.html');
	 	}
    });

    // Wire up drop button to show marker menu popup.
    $('#drop-button').click(function() {
        showPopup('drop-options.html')
    });

    // Wire up filter button to show map filters.
    $('#filter-button').click(function() {
        showSidebar('filters.html');
    });

    // Wire up record button to switch between play/stop icons.
    $('#recording-button').click(function() {
        if ($('#recording-button').hasClass('isRecording')) {
            showPopup('stop-record-notification.html');
            $('#recording-button').removeClass('isRecording');
            $('#drop-button').hide();
        } else {
            showPopup('record-notification.html');
            $('#recording-button').addClass('isRecording');
            $('#drop-button').show();
        }
    });

    // Wire up locate user button.
    $('#locate-user-button').click(function() {
        panToUserLocation();
    });

    // Wire up follow button on route info card
    $('#route-info-button').click(function() {
       console.log('Hi');
       hideSidebar();
    });

    // Wire up search bar to Mapbox geocoding API....
    // Probably more fancy than we need...
    $('#dest-search-input').on("change paste keyup", function() {
        var search_text = $('#dest-search-input').val();
        if (!search_text || search_text == null || search_text.length == 0) {
            $('#search-results').html("");
            return;
        }
        /*else if (search_text.slice(-1) != " ") {
            return;
        }*/
        lookupLocation(search_text, function(results) {
            resultHTML = geoJSONToList(results);
            if (results.length > 0) {
                $('#search-results').html(resultHTML);
            }
            else {
                $('#search-results').html("");
            }
        });
    })

    // Show tutorial if this is the first time the user is
    // loading the page.
    if (!sessionStorage.getItem("showed_tutorial")) {
        showPopup("tutorial.html");
        sessionStorage.setItem("showed_tutorial", true);
    }
});

