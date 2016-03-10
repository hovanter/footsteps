BASE_SEARCH_STRING = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

// Performs forward geocoding to find the top 5 closest
// location to the given search query.
function lookupLocation(search_text, callback) {
    var params = "?access_token=" + L.mapbox.accessToken;
    var search_query = BASE_SEARCH_STRING + encodeURIComponent(search_text) + ".json" + params;
    $.get(search_query, function(data) {
    	$("#search-results").show();
        callback(data.features);
    });
}

// Converts GeoJSON search results to HTML text.
function geoJSONToList(results) {
	var text = "<ul>";
	for (var index in results) {
		text += "<li><a href='javascript:loadResult()'>" + results[index].text + "</a></li>"
	}
	text += "</ul>";
	return text;
}

// Hides search results.
function hideSearchResults() {
	$("#search-results").hide();
}

// Shows search results.
function showSearchResults() {
	$("#search-results").show();
}