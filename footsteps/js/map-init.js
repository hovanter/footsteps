// Fetches the user location and calls the provided
// callback function with the user location.
function getUserLocation(callback) {
    map.locate();
    map.on('locationerror', null);
    map.on('locationfound', function(e) {
        // Get user coordinates.
        var coordinates = [35.0176671,135.7743668]//[e.latlng.lat, e.latlng.lng];

        // Update (create if necessary) marker.
        if (typeof userMarker === "undefined") {
            var userIcon = L.divIcon({
              className: 'user-location-icon',
              iconSize: [30, 30],
              shadowSize: [36, 36],
              shadowAnchor: [15, 15]
            });
            userMarker = L.marker(coordinates, {icon: userIcon}).addTo(map);
            layers["user"] = userMarker;
        }
        userMarker.setLatLng(coordinates);

        if (typeof callback !== null) {
            callback(coordinates[0], coordinates[1]);
        }
    });
}

// Pans the map to the user location.
function panToUserLocation() {
    getUserLocation(function(lat, lng) {
        map.panTo([lat, lng]);
    });
}

// Turns the element identified by cssID into a
// toggle for the map layer identifeid by layerID.
function addLayerToggle(layerID, cssID) {
    $(cssID).on("toggle", function(e) {
        if (e.detail.isActive) {
            map.addLayer(layers[layerID]);
        }
        else {
            map.removeLayer(layers[layerID]);
        }
    });
    if (map.hasLayer(layers[layerID])) {
        $(cssID).addClass("active");
    }
}

// Loads a search result (hard-code to Hoover tower 
// for now)
function loadResult() {
    hideSearchResults();
    map.panTo([35.0176671,135.7743668]);
    showSidebar('route-info.html')
}

$(document).ready(function() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiYW5kcmVpdDEiLCJhIjoiY2lqbDBlbzc1MDAwenVmbTVxbWl2eGg1ZCJ9.aydIVbwdDbWM4bo-6oEdgg';
    map = L.mapbox.map('footstep-map', 'mapbox.streets', {
        maxZoom: 20,
        minZoom: 1,
        attributionControl: false,
        // This map option disables world wrapping. by default, it is false.
        continuousWorld: true
    });
    map.setView([35.0176671,135.7743668], 14);
    map.zoomControl.removeFrom(map);
    map.on("click", function(e) {
        hideSidebar();
    });

    // Load data layers. Store them into a dictionary of
    // layer ID --> Mapbox layer object.
    layers = {
        "paths": L.mapbox.featureLayer('andreit1.pceemnjf'),
        "friends": L.mapbox.featureLayer('andreit1.pcgaelfg'),
        "places": L.mapbox.featureLayer('bhnascar.pa5806m2'),
        "user": L.mapbox.featureLayer()
    };

    // Load any initial layers that you want here.
    map.addLayer(layers["friends"]);
    map.addLayer(layers["paths"]);
    map.addLayer(layers["user"]);

    // Pan to user location.
    panToUserLocation();

    /* Wire up clicks for map markers and polylines. (Show sidebar) */
    for (var key in layers) {
        var layer = layers[key];
        layer.on("ready", function(e) {
            var parentLayer = this;
            this.eachLayer(function(marker) {
                if (marker.feature.geometry.type == "LineString") {
                    marker.on("popupopen", function(e) {
                        _selectPath(this);
                    });
                    marker.on("popupclose", function(e) {
                        _deselectPath(this);
                    });
                    _addStartAndEndIcons(parentLayer, marker);
                } 
            });
        });
    }
});

/**** WARNING: PRIVATE HELPER METHODS BELOW ****/

// Pans the map to a given path, considering the
// amount of the viewport obstructed by a sidebar
// with the given height.
function _panToPath(path, sidebar_height) {
    var bounds = path.getBounds();
    var sb_top = $(window).height() - sidebar_height - 150;
    var sb_offset = sb_top / $(window).height();
    var lat_diff = bounds._northEast.lat - bounds._southWest.lat;
    var correct_diff = lat_diff / sb_offset;
    var adjusted_lat = bounds._northEast.lat - correct_diff;
    map.fitBounds([
        [adjusted_lat, bounds._southWest.lng],
        [bounds._northEast.lat, bounds._northEast.lng]
    ]);
    //map.fitBounds(path.getBounds());
}

// Adds start and end icons to a given path.
function _addStartAndEndIcons(parentLayer, pathLayer) {
    var markerLayer = L.mapbox.featureLayer().addTo(map);

    //1aea3faec74e9dae067554d923f85080 - hiean Shrine
    //82ae7d5a1c2ca50823aff861ecdedcd3 - kamo river
    var iconURLs = {
        '82ae7d5a1c2ca50823aff861ecdedcd3': "assets/catherine-profile.jpg",
        '1aea3faec74e9dae067554d923f85080': "assets/ben-han-profile.jpg",
        '25e098ca164b5d9e29a4e068212984cc': "assets/andrei-profile.jpg",
        '6764526f46d43d013f071abb14c6df03': "assets/andrei-profile.jpg",
        'ffd89a07052364dd170334b970de8cc4': "assets/andrei-profile.jpg"
    };
    var iconURL = iconURLs[pathLayer.feature.id];
    
    // Create markers using geoJSON
    var coordinates = pathLayer.feature.geometry.coordinates
    var geoJSON = [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": coordinates[0]
            },
            "properties": {
                "title": "Start",
                "icon": {
                    "iconUrl": iconURL,
                    "iconSize": [35, 35],
                    "iconAnchor": [17.5, 17.5],
                    "popupAnchor": [0, -20],
                    "className": "start-icon"
                }
            }
        }
    ];

    // Wire marker layer actions.
    markerLayer.on("popupopen", function(e) {
        _selectPath(pathLayer);
    });
    markerLayer.on("popupclose", function(e) {
        _deselectPath(pathLayer);
    })
    markerLayer.on('layeradd', function(e) {
        var marker = e.layer,
        feature = marker.feature;
        marker.setIcon(L.icon(feature.properties.icon));
        _toggleHiddenLayers();
    });

    markerLayer.setGeoJSON(geoJSON);
    parentLayer.addLayer(markerLayer);
}

function _toggleHiddenLayers() {
    for (var key in layers) {
        layer = layers[key];
        if (!map.hasLayer(layer)) {
            map.addLayer(layer);
            map.removeLayer(layer);
        }
    }
}

// Loads a map layer from a JSON file.
function _loadLayerFromJSON(json) {
    var layer = L.mapbox.featureLayer().addTo(map);
    layer.setGeoJSON(json);
    return layer;
}

// Selects a given path (marker).
function _selectPath(path) {
    console.log(path.feature.id);
    path.setStyle({color: '#f66', opacity: 0.8});
    //1aea3faec74e9dae067554d923f85080 - hiean Shrine
    //82ae7d5a1c2ca50823aff861ecdedcd3 - kamo river
    console.log(path.feature.id);
    if(path.feature.id === '82ae7d5a1c2ca50823aff861ecdedcd3'){//kamo
        showSidebar('route-info-single-kamo.html')
    }
    else if(path.feature.id === '1aea3faec74e9dae067554d923f85080'){//heian
        showSidebar('route-info-single-heian.html')
    }
    else{//cat
        showSidebar('route-info-single-catherine.html')
    }
    _panToPath(path, 308);
}

// Deselects a given path (marker).
function _deselectPath(path) {
    path.setStyle({color: path.feature.properties.stroke});
}