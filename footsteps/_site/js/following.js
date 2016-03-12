//pick up three markers on the way, wire different templates for each stage
function wireFollow(){
    console.log("Wired follow.");
    $('.route-info-button').click(function() {
        console.log("Follow clicked!");
        sessionStorage.removeItem('stopFollowing');
        hideSidebar();
        showSidebar('following.html');
        setTimeout(function() {
            console.log(sessionStorage.getItem('stopFollowing'));
            if (!sessionStorage.getItem('stopFollowing')) {
                showPopup('new-marker.html');
            }
            else {
                console.log("Aborted follow");
                sessionStorage.removeItem('stopFollowing');
            }
        },2000);
    });
}

function wirePickUp(){
    $('#pick-up').off("click");
    $('#pick-up').click(function(){
        hideSidebar();
        showPopup('photo-discovery1.html');
    });
    $('#skip-btn').off("click");
    $('#skip-btn').click(function(){
        $('#popup-overlay').trigger('click');
    });
    $('#popup-overlay-btn').off("click");
    $('#popup-overlay').click(function(){
        setTimeout(function(){
            console.log(sessionStorage.getItem('stopFollowing'));
            if (!sessionStorage.getItem('stopFollowing'))
                showPopup('new-marker2.html');
            else
                sessionStorage.removeItem('stopFollowing');
        },2000);
    });
}

function wireOverlay(){
    $('#popup-overlay').off("click");
    $('#popup-overlay').click(function(){
        showSidebar();
        setTimeout(function(){
            console.log(sessionStorage.getItem('stopFollowing'));
            if (!sessionStorage.getItem('stopFollowing'))
                showPopup('new-marker2.html');
            else
                sessionStorage.removeItem('stopFollowing');
        },2000);
    });
    $('#popup-overlay').click(function(){
        hidePopup();
    });
}

function wirePickUp2(){
    $('#pick-up').off("click");
    $('#pick-up').click(function(){
        hideSidebar();
        showPopup('photo-discovery2.html');
    });
    $('#skip-btn').off("click");
    $('#skip-btn').click(function(){
        $('#popup-overlay').trigger('click');
    });
    $('#popup-overlay-btn').off("click");
    $('#popup-overlay').click(function(){
        setTimeout(function(){
            console.log(sessionStorage.getItem('stopFollowing'));
            if (!sessionStorage.getItem('stopFollowing'))
                showPopup('new-marker3.html');
            else
                sessionStorage.removeItem('stopFollowing');
        },2000);
    });
}

function wireOverlay2(){
    $('#popup-overlay').off("click");
    $('#popup-overlay').click(function(){
        showSidebar();
        setTimeout(function(){
            console.log(sessionStorage.getItem('stopFollowing'));
            if (!sessionStorage.getItem('stopFollowing')) {
                showPopup('new-marker3.html')
            }
            else {
                sessionStorage.removeItem('stopFollowing');
            }
        },2000);
    });
    $('#popup-overlay').click(function(){
        hidePopup();
    });
}

function wirePickUp3(){
    $('#pick-up').off("click");
    $('#pick-up').click(function(){
        hideSidebar();
        showPopup('photo-discovery3.html');
    });
    $('#skip-btn').off("click");
    $('#skip-btn').click(function(){
        $('#popup-overlay').trigger('click');
    });
    $('#popup-overlay-btn').off("click");
    $('#popup-overlay').click(function(){
        setTimeout(function(){
            console.log(sessionStorage.getItem('stopFollowing'));
            if (!sessionStorage.getItem('stopFollowing'))
                showPopup('path-complete.html');
            else
                sessionStorage.removeItem('stopFollowing');
        },2000);
    });
}

function wireOverlay3(){
    $('#popup-overlay').click(function(){
        console.log('show plz');
        showSidebar();
        setTimeout(function(){
            console.log(sessionStorage.getItem('stopFollowing'));
            if (!sessionStorage.getItem('stopFollowing'))
                showPopup('path-complete.html')
            else
                sessionStorage.removeItem('stopFollowing');
        },2000);
    });
}

function unwireOverlay(){
    $('#popup-overlay').off("click");
    $('#popup-overlay').click(function(){
        hidePopup();
        hideSidebar();
    });
}
