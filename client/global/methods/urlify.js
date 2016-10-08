urlify = function (text) {
    	var urlRegex = URL_REGEX;

    	let url = text.replace(urlRegex, function(url) {
    		return '<a href="' + url + '">' + url + '</a>';	
    	});

    	return url;
	}
