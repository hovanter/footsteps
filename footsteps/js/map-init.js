$(document).ready(function() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiYmhuYXNjYXIiLCJhIjoiY2lqa3NzaTc3MDAwNHQ5a29ibXgxOWllbyJ9.PwtqGI5Rbwewn2sbw5cgVw';
    map = L.mapbox.map('footstep-map', 'mapbox.streets', {
      // the options here prevent mouse wheel or trackpad scrolling
      // and restrict the zooms to zoom levels 14 through 18
      scrollWheelZoom: false,
      maxZoom: 20,
      minZoom: 10,
      attributionControl: false
    }).setView([37.4260422,-122.170671], 17);
    map.zoomControl.removeFrom(map);

    /* Load hard-coded layers. */
    peopleLayer = L.mapbox.featureLayer('bhnascar.p9c980ek');
    friendsLayer = L.mapbox.featureLayer('bhnascar.pa5h76d8');
    placesLayer = L.mapbox.featureLayer('bhnascar.pa5806m2');

    /* Wire up clicks for map markers and polylines. (Show sidebar) */
    placesLayer.on("ready", function(e) {
      this.eachLayer(function(marker) {
          marker.on("click", function(e) {
              setSidebarContent('route-info.html')
              showSidebar(300);
          })
      });
    });

    /* Find user location. */
    panToUserLocation = function() {
      map.locate();
      map.on('locationerror', null);
      map.on('locationfound', function(e) {
        map.panTo(new L.LatLng(e.latlng.lat, e.latlng.lng));
        if (typeof userLocationLayer == "undefined") {
          userLocationLayer = L.mapbox.featureLayer().addTo(map);
        }
        userLocationLayer.setGeoJSON({
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
      });
    }
    panToUserLocation();

    /* Filter functions */

    // Shows the given layer if |show| is true,
    // hides it otherwise.
    filterLayer = function(layer, show) {
      if (show) {
        map.addLayer(layer);
      }
      else {
        map.removeLayer(layer);
      }
    }

    // Returns whether or not the given layer is
    // curently displayed.
    isLayerVisible = function(layer) {
      return map.hasLayer(layer);
    }

    // The layer will be toggled by clicks on the
    // element with the given CSS ID.
    addLayerToggle = function(layer, cssID) {
      var toggle = document.querySelector(cssID);
      toggle.addEventListener('toggle', function(e) {
        filterLayer(layer, e.detail.isActive);
      });
      if (isLayerVisible(layer)) {
        $(cssID).addClass("active");
      }
    }
});