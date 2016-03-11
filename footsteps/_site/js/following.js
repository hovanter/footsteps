//pick up three markers on the way, wire different templates for each stage
function wireFollow(){
    console.log("Wired follow.");
    $('.route-info-button').click(function() {
        console.log("Follow clicked!");
        hideSidebar();
        showSidebar('following.html');
        setTimeout(function() {
            if (!sessionStorage.getItem('isFollowing')) {
                showPopup('new-marker.html');
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
            if (!sessionStorage.getItem('isFollowing') || sessionStorage.isFollowing)
                showPopup('new-marker2.html');
            else
                sessionStorage.setItem('isFollowing', true);
        },2000);
    });
}

function wireOverlay(){
    $('#popup-overlay').off("click");
    $('#popup-overlay').click(function(){
        showSidebar();
        setTimeout(function(){
            if (!sessionStorage.getItem('isFollowing') || sessionStorage.isFollowing)
                showPopup('new-marker2.html');
            else
                sessionStorage.setItem('isFollowing', true);
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
            if (!sessionStorage.getItem('isFollowing') || sessionStorage.isFollowing)
                showPopup('new-marker3.html');
            else
                sessionStorage.setItem('isFollowing', true);
        },2000);
    });
}

function wireOverlay2(){
    $('#popup-overlay').off("click");
    $('#popup-overlay').click(function(){
        showSidebar();
        setTimeout(function(){
            showPopup('new-marker3.html')
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
            if (!sessionStorage.getItem('isFollowing') || sessionStorage.isFollowing)
                showPopup('path-complete.html');
            else
                sessionStorage.setItem('isFollowing', true);
        },2000);
    });
}

function wireOverlay3(){
    $('#popup-overlay').click(function(){
        console.log('show plz');
        showSidebar();
        setTimeout(function(){
            if (!sessionStorage.getItem('isFollowing') || sessionStorage.isFollowing)
                showPopup('path-complete.html')
            else
                sessionStorage.setItem('isFollowing', true);
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
