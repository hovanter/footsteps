// Hides the sidebar.
function hideSidebar() {
    $('.filter-bar').addClass('slide-down', 1000, 'easeOutExpo');
    $('.filter-bar').removeClass('slide-up', 1000, 'easeOutExpo');
}

// Shows the sidebar.
function showSidebar() {
    $('.filter-bar').addClass('slide-up', 1000, 'easeOutExpo');
    $('.filter-bar').removeClass('slide-down', 1000, 'easeOutExpo');
}

// cssSelector indicates the CSS ID of the sidebar content
// that you would like to display. All other content is
// hidden.
function setSidebarContent(cssSelector) {
    $('.sidebar-content').not('.filter-bar ' + cssSelector).hide();
    $('.filter-bar ' + cssSelector).show();
}