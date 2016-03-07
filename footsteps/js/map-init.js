// Fetches the user location and calls the provided
// callback function with the user location.
function getUserLocation(callback) {
    map.locate();
    map.on('locationerror', null);
    map.on('locationfound', function(e) {
        layers["user"].setGeoJSON({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [e.latlng.lng, e.latlng.lat]
            },
            properties: {
                'title': 'Here you are!',
                'marker-color': '#F0E68C',
                'marker-symbol': 'pitch'
            }
        });
        if (typeof callback !== null) {
            callback(e.latlng.lat, e.latlng.lng);
        }
    });
}

// Pans the map to the user location.
function panToUserLocation() {
    getUserLocation(function(lat, lng) {
        map.panTo([lat, lng]);
    });
    layers["user"].eachLayer(function(marker) {
        if (marker.feature.geometry.type == "Point") {
            marker.openPopup();
        }
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

$(document).ready(function() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiYmhuYXNjYXIiLCJhIjoiY2lqa3NzaTc3MDAwNHQ5a29ibXgxOWllbyJ9.PwtqGI5Rbwewn2sbw5cgVw';
    map = L.mapbox.map('footstep-map', 'mapbox.streets', {
        maxZoom: 20,
        minZoom: 10,
        attributionControl: false
    });
    map.setView([37.4260422, -122.170671], 17);
    map.zoomControl.removeFrom(map);
    map.on("click", function(e) {
        hideSidebar();
    });

    // Load data layers. Store them into a dictionary of
    // layer ID --> Mapbox layer object.
    layers = {}
    $.get("json/friends.json", function(json) {
        layers["friends"] = _loadLayerFromJSON(json);
        map.addLayer(layers["friends"]);
    });
    $.get("json/paths.json", function(json) {
        layers["paths"] = _loadLayerFromJSON(json);
    });
    $.get("json/places.json", function(json) {
        layers["places"] = _loadLayerFromJSON(json);
    });
    layers["user"] = L.mapbox.featureLayer().addTo(map);

    // Pan to user location. 
    // panToUserLocation();

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
    /*var bounds = path.getBounds();
    var sb_top = $(window).height() - sidebar_height - 150;
    var sb_offset = sb_top / $(window).height();
    var lat_diff = bounds._northEast.lat - bounds._southWest.lat;
    var correct_diff = lat_diff / sb_offset;
    var adjusted_lat = bounds._northEast.lat - correct_diff;
    map.fitBounds([
        [adjusted_lat, bounds._southWest.lng],
        [bounds._northEast.lat, bounds._northEast.lng]
    ]);*/
    map.fitBounds(path.getBounds());
}

// Adds start and end icons to a given path.
function _addStartAndEndIcons(parentLayer, pathLayer) {
    var markerLayer = L.mapbox.featureLayer().addTo(map);

    var iconURLs = [
        "assets/catherine-profile.jpg",
        "assets/ben-han-profile.jpg",
        "assets/andrei-profile.jpg"
    ];
    var iconURL = iconURLs[Math.floor(Math.random() * iconURLs.length)];
    
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
    markerLayer.on("click", function(e) {
        _selectPath(pathLayer);
    });
    markerLayer.on('layeradd', function(e) {
        var marker = e.layer,
        feature = marker.feature;
        marker.setIcon(L.icon(feature.properties.icon));
    });

    markerLayer.setGeoJSON(geoJSON);
    parentLayer.addLayer(markerLayer);
}

// Loads a map layer from a JSON file.
function _loadLayerFromJSON(json) {
    var layer = L.mapbox.featureLayer().addTo(map);
    layer.setGeoJSON(json);
    return layer;
}

// Selects a given path (marker).
function _selectPath(path) {
    path.setStyle({color: '#f66', opacity: 0.8});
    setSidebarContent('route-info.html')
    showSidebar(530);
    _panToPath(path, 530);
}

// Deselects a given path (marker).
function _deselectPath(path) {
    path.setStyle({color: path.feature.properties.stroke});
}