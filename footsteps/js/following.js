//pick up three markers on the way, wire different templates for each stage
function wireFollow(){
    $('#route-info-button').click(function() {
            hideSidebar();
            setSidebarContent('following.html');
            showSidebar(180);
            setTimeout(function(){
                setPopupContent('new-marker.html')
                showPopup(100);
            },2000);
    });
}

function wirePickUp(){
    $('#pick-up').off("click");
    $('#pick-up').click(function(){
        hideSidebar();
        setPopupContent('photo-discovery1.html');
        showPopup(300);
    });
}

function wireOverlay(){
    $('#popup-overlay').off("click");
    $('#popup-overlay').click(function(){
        showSidebar(180);
        setTimeout(function(){
            setPopupContent('new-marker2.html');
            showPopup(100);
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
        setPopupContent('photo-discovery2.html');
        showPopup(300);
    });
}

function wireOverlay2(){
    $('#popup-overlay').off("click");
    $('#popup-overlay').click(function(){
        showSidebar(180);
        setTimeout(function(){
            setPopupContent('new-marker3.html')
            showPopup(100);
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
        setPopupContent('photo-discovery3.html');
        showPopup(300);
    });
}

function wireOverlay3(){
    $('#popup-overlay').click(function(){
        showSidebar(180);
        setTimeout(function(){
            setPopupContent('path-complete.html')
            showPopup(100);
        },2000);
        hideSidebar();
    });
}

function unwireOverlay(){
    $('#popup-overlay').off("click");
    $('#popup-overlay').click(function(){
        hidePopup();
    });
}
