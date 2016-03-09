//pick up three markers on the way, wire different templates for each stage
function wireFollow(){
    console.log("Wired follow.");
    $('.route-info-button').click(function() {
            console.log("Follow clicked!");
            $('#sidebar-handle-icon').hide();
            hideSidebar();
            setSidebarContent('following.html');
            showSidebar(130);
            setTimeout(function(){
                setPopupContent('new-marker.html')
                showPopup(120);
            },2000);
    });
}

function wirePickUp(){
    $('#pick-up').off("click");
    $('#pick-up').click(function(){
        hideSidebar();
        setPopupContent('photo-discovery1.html');
        showPopup();
    });
    $('#skip-btn').off("click");
    $('#skip-btn').click(function(){
        $('#popup-overlay').trigger('click');
    });
    $('#popup-overlay-btn').off("click");
    $('#popup-overlay').click(function(){
        setTimeout(function(){
            setPopupContent('new-marker2.html');
            showPopup(120);
        },2000);
    });
}

function wireOverlay(){
    $('#popup-overlay').off("click");
    $('#popup-overlay').click(function(){
        showSidebar(130);
        setTimeout(function(){
            setPopupContent('new-marker2.html');
            showPopup(120);
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
        showPopup();
    });
    $('#skip-btn').off("click");
    $('#skip-btn').click(function(){
        $('#popup-overlay').trigger('click');
    });
    $('#popup-overlay-btn').off("click");
    $('#popup-overlay').click(function(){
        setTimeout(function(){
            setPopupContent('new-marker3.html');
            showPopup(120);
        },2000);
    });

}

function wireOverlay2(){
    $('#popup-overlay').off("click");
    $('#popup-overlay').click(function(){
        showSidebar(130);
        setTimeout(function(){
            setPopupContent('new-marker3.html')
            showPopup(120);
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
        showPopup();
    });
    $('#skip-btn').off("click");
    $('#skip-btn').click(function(){
        $('#popup-overlay').trigger('click');
    });
    $('#popup-overlay-btn').off("click");
    $('#popup-overlay').click(function(){
        setTimeout(function(){
            setPopupContent('path-complete.html');
            showPopup(120);
        },2000);
    });

}

function wireOverlay3(){
    $('#popup-overlay').click(function(){
        console.log('show plz');
        showSidebar(130);
        setTimeout(function(){
            setPopupContent('path-complete.html')
            showPopup(120);
        },2000);
    });
}

function unwireOverlay(){
    $('#popup-overlay').off("click");
    $('#popup-overlay').click(function(){
        hidePopup();
        hideSidebar();
        $('#sidebar-handle-icon').show();
    });
}
