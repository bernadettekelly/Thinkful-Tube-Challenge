var Youtube_base_URL = "https://www.googleapis.com/youtube/v3/search";

function getDataFromApi (searchTerm, callback) {
	var query = {
		part: 'snippet',
		r: 'json',
		key: 'AIzaSyAiZvfIQ2sqypbAn7n6tN5Cgn1wLeXmwGA',
		q: searchTerm
	}
	$.getJSON(Youtube_base_URL, query, callback);
}

function showSearchResults(data) {
	var result = '';
	if (data.items) {
		data.items.forEach(function(item) {
			result += '<p>' + item.id.videoId + '</p>';
		});
	}
	else {
		result += '<p>No results found</p>';
	}
	$('.search-results').html(result);
}

function submitForm() {
	$('.search-form').submit(function(event) {
		event.preventDefault();
		var query = $(this).find('.query-input').val();
		getDataFromApi(query, showSearchResults);
	});
}

// (function(){submitForm();});
$(document).ready(function(){submitForm()});