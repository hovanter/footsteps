/**** Popup implementation ****/

// Hides the popup.
function hidePopup() {
    $('#popup').height(0);
}

// Shows the popup.
function showPopup(height) {
    $('#popup').height(height);
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
    $('#sidebar').height(0);
}

// Shows the sidebar.
function showSidebar(height) {
    $('#sidebar').height(height);
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

/*
// cssSelector indicates the CSS ID of the sidebar content
// that you would like to display. All other content is
// hidden.
function setSidebarContent(cssSelector) {
    $('#sidebar-content').not('#sidebar ' + cssSelector).hide();
    $('#sidebar ' + cssSelector).show();
}
*/