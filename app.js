var Youtube-base-URL = https:"//www.googleapis.com/youtube/v3/search";

function getDataFromApi (searchTerm, callback) {
	var query = {
		part: 'snippet'
		r: 'json'
		key: 'AIzaSyAiZvfIQ2sqypbAn7n6tN5Cgn1wLeXmwGA'
		q: 'string'
	}
	$.getJSON(Youtube-base-URL, query, callback);
}

function showSearchResults(data) {
	var result = '';
	if (data.Search) {
		data.Search.forEach(function(item) {
			result += '<p>' + item.Title + '</p>';
		});
	}
	else {
		result += '<p>No results found</p>';
	}
	$('search-results').html(result);
}

function submitForm() {
	$('search-form').submit(function(event) {
		event.PreventDefault();
		var query = $(this).find('.query-input').val();
		getDataFromApi(query, showSearchResults);
	});
}

(function(){submitForm();});