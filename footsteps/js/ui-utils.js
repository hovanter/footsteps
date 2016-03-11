/**** Popup implementation ****/

// Hides the popup.
function hidePopup() {
    $('#popup-overlay').css({
        background: "transparent",
        "z-index": -3
    });
    $('#popup').css({
        "max-height": "0px",
        left: "15px",
        top: ($(window).height() / 2.0) + "px",
        width: ($(window).width() - 30) + "px"
    });
}

// Returns whether or not the popup is currently visible.
function isPopupVisible() {
    return $('#popup').height() > 0;
}

// Sets the content of the popup with the content of the
// given HTML file and then shows the sidebar. Uses an AJAX call.
//
// If no argument is provided the AJAX call is not made and
// the popup is shown with previous content, if any.
function showPopup(html_file) {
    $('#popup').load(html_file, function() {
        height = $("#popup")[0].scrollHeight;
        $('#popup').css({
            "max-height": "1000px",
            left: "15px",
            top: ($(window).height() / 2.0 - height / 2.0) + "px",
            width: ($(window).width() - 30) + "px"
        });
        $('#popup-overlay').css({
            background: "rgba(0, 0, 0, 0.5)",
            "z-index": "14"
        });
        $('#popup-overlay').click(function(e) {
            hidePopup();
        });
    });
}

/**** Sidebar implementation ****/

// Hides the sidebar.
function hideSidebar() {
    $('#sidebar').css({
        bottom: "0px",
        "max-height": "0px"
    });
}

// Returns whether or not the sidebar is currently visible.
function isSidebarVisible() {
	return $('#sidebar').height() > 0;
}

// Sets the content of the sidebar with the content of the
// given HTML file and then shows the sidebar. Uses an AJAX call.
//
// If no argument is provided the AJAX call is not made and
// the sidebar is shown with previous content, if any.
function showSidebar(html_file) {
    if (html_file !== undefined) {
        $('#sidebar').load(html_file, function() {;
            $('#sidebar').css({
                bottom: "15px",
                "max-height": "1000px",
                width: ($(window).width() - 30) + "px"
            });
        });
    }
    else {
        $('#sidebar').css({
            bottom: "15px",
            "max-height": "1000px",
            width: ($(window).width() - 30) + "px"
        });
    }
}