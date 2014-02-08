(function() {
	'use strict';

	var d = document;
	var streambox = d.getElementById('streambox');

	if (streambox === null) {
		console.log('%cStreambox is null', 'color:#abb;');
		return;
	} else if (streambox.getElementsByTagName('iframe').length === 0) {
		console.log('%cStreambox iframe is null', 'color:#abb;');
		return;
	}
	console.log('%cStreambox moving', 'color:#abb;');
	location.href = streambox.getElementsByTagName('iframe')[0].getAttribute('src');
})();
