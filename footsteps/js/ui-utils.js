// Hides the sidebar.
function hideSidebar() {
	/*
    $('.sidebar').addClass('slide-down', 1000, 'easeOutExpo');
    $('.sidebar').removeClass('slide-up', 1000, 'easeOutExpo');
    */
    $('.sidebar').height(0);
}

// Shows the sidebar.
function showSidebar(height) {
	/*
    $('.sidebar').addClass('slide-up', 1000, 'easeOutExpo');
    $('.sidebar').removeClass('slide-down', 1000, 'easeOutExpo');
    */
    $('.sidebar').height(height);
}

// Returns whether or not the sidebar is currently visible.
function isSidebarVisible() {
	return $('.sidebar').height() > 0;
}

// cssSelector indicates the CSS ID of the sidebar content
// that you would like to display. All other content is
// hidden.
function setSidebarContent(cssSelector) {
    $('.sidebar-content').not('.sidebar ' + cssSelector).hide();
    $('.sidebar ' + cssSelector).show();
}