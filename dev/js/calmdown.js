(function() {
	'use strict';

	var ad = document.getElementById('memberad');

	if (ad === null) {
		console.log('%cAd is null', 'color:#abb;');
		return;
	}

	ad.style.display = 'none';
})();
