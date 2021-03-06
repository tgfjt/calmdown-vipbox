(function() {
	'use strict';

	chrome.contextMenus.create({
		'title': 'calmdown-vipbox: Move',
		'type': 'normal',
		'contexts': ['all'],
		onclick: function() {
			chrome.tabs.executeScript(null, {
				file: 'build/js/move.js',
				allFrames: true
			});
		}
	});

	chrome.contextMenus.create({
		'title': 'calmdown-vipbox: RemoveAd',
		'type': 'normal',
		'contexts': ['all'],
		onclick: function() {
			chrome.tabs.executeScript(null, {
				file: 'build/js/calmdown.js',
				allFrames: true
			});
		}
	});
})();
