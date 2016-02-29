$(document).ready(function() {
  /* Wire up interface button actions. */
  $('.filter-icon').click(function() {
  		if($('.filter-bar').hasClass('slide-up')) {
  	 		$('.filter-bar').addClass('slide-down', 1000, 'easeOutExpo');
  	 		$('.filter-bar').removeClass('slide-up', 1000, 'easeOutExpo');

  	 		//$('.filter-container').addClass('slide-up-container', 1000, 'easeOutExpo');
  	 		$('.filter-container').removeClass('slide-up-container', 1000, 'easeOutExpo');

  	 		$('.filter-icon').removeClass('icon-down-nav');
  	 		$('.filter-icon').addClass('icon-up-nav');
  	 	} else {
  	 		$('.filter-container').addClass('slide-up-container', 1000, 'easeOutExpo');
  	 		//$('.filter-container').removeClass('slide-down-container', 1000, 'easeOutExpo');

  	 		$('.filter-bar').addClass('slide-up', 1000, 'easeOutExpo');
  	 		$('.filter-bar').removeClass('slide-down', 1000, 'easeOutExpo');

  	 		$('.filter-icon').removeClass('icon-up-nav');
  	 		$('.filter-icon').addClass('icon-down-nav');
  	 	}
  });

  /* Slack init scripts. */
  $('.slide-group').slick({dots: true});
  $('.slide-group button').remove(); 

  $('#recording-icon').click(function() {
  	if($('.filter-bar').hasClass('slide-up')) {
  		
  	} else {

  	}
  });

  /* Mapbox init scripts below. */
  L.mapbox.accessToken = 'pk.eyJ1IjoiYmhuYXNjYXIiLCJhIjoiY2lqa3NzaTc3MDAwNHQ5a29ibXgxOWllbyJ9.PwtqGI5Rbwewn2sbw5cgVw';
  map = L.mapbox.map('footstep-map', 'mapbox.streets', {
      // the options here prevent mouse wheel or trackpad scrolling
      // and restrict the zooms to zoom levels 14 through 18
      scrollWheelZoom: false,
      maxZoom: 20,
      minZoom: 10,
      attributionControl: false
  }).setView([37.4240412,-122.1754616], 17);

  campusTrails = L.mapbox.featureLayer('bhnascar.p9c980ek');
  map.addLayer(campusTrails);
  map.zoomControl.removeFrom(map);

  /* Find user location. */
  /*
  map.locate();
  map.on('locationerror', null);
  map.on('locationfound', function(e) {
      map.fitBounds(e.bounds);
      var userLocationLayer = L.mapbox.featureLayer().addTo(map);
      userLocationLayer.setGeoJSON({
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [e.latlng.lng, e.latlng.lat]
          },
          properties: {
              'title': 'Here you are!',
              'marker-color': '#ff8888',
              'marker-symbol': 'star'
          }
      });
  });*/

});