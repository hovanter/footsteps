/**** Popup implementation ****/

// Hides the popup.
function hidePopup() {
    $('#popup-overlay').hide();
    $('#popup').height(0);
}

// Shows the popup.
function showPopup(height) {
    $('#popup-overlay').show();
    $('#popup-overlay').click(function(e) {
        hidePopup();
    });
    $('#popup').height(height);
    $('#popup').css({
        left: "15px",
        top: ($(window).height() / 2.0 - height) + "px",
        width: ($(window).width() - 30) + "px"
    });
}

// Returns whether or not the popup is currently visible.
function isPopupVisible() {
    return $('#popup').height() > 0;
}

// Sets the content of the popup with the content of the
// given HTML file. Uses an AJAX call.
function setPopupContent(html_file) {
    $('#popup').load(html_file);
}

/**** Sidebar implementation ****/

// Hides the sidebar.
function hideSidebar() {
    $('#sidebar').css({
        bottom: "0px",
        height: "0px"
    });
    $('#sidebar-handle').css({
        bottom: "15px",
        transform: "none"
    });
}

// Shows the sidebar.
function showSidebar(height) {
    $('#sidebar').css({
        bottom: "15px",
        height: height + "px",
        width: ($(window).width() - 30) + "px"
    });
    $('#sidebar-handle').css({
        bottom: (height + 30) + "px",
        transform: "rotate(180deg)"
    });
}

// Returns whether or not the sidebar is currently visible.
function isSidebarVisible() {
	return $('#sidebar').height() > 0;
}

// Sets the content of the sidebar with the content of the
// given HTML file. Uses an AJAX call.
function setSidebarContent(html_file) {
    $('#sidebar').load(html_file);
}