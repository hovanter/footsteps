$(document).ready(function() {
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

  $('.slide-group').slick({dots: true});
  $('.slide-group button').remove(); 

  var recordButton = $('.action-container:first-child .action-button');

  recordButton.click(function() {
  	if(recordButton.hasClass('icon-stop')) {
  	 	recordButton.removeClass('icon-stop');
  		recordButton.addClass('icon-play');
  		$('.action-container:first-child').removeAttr('id');
  	} else {
  	 	recordButton.removeClass('icon-play');
  		recordButton.addClass('icon-stop'); 
		$('.action-container:first-child').attr('id', 'isRecording'); 	
  	}
  });

  L.mapbox.accessToken = 'pk.eyJ1IjoiYmhuYXNjYXIiLCJhIjoiY2lqa3NzaTc3MDAwNHQ5a29ibXgxOWllbyJ9.PwtqGI5Rbwewn2sbw5cgVw';
  map = L.mapbox.map('footstep-map', 'mapbox.streets', {
      // the options here prevent mouse wheel or trackpad scrolling
      // and restrict the zooms to zoom levels 14 through 18
      scrollWheelZoom: false,
      maxZoom: 20,
      minZoom: 10,
      attributionControl: false
  }).setView([37.4240412,-122.1754616], 17);

  /* Various layers */
  campusTrails = L.mapbox.featureLayer('bhnascar.p9c980ek');

  /* Add all layers */
  map.addLayer(campusTrails);

  /* Remove zoom contorol */
  map.zoomControl.removeFrom(map);

});