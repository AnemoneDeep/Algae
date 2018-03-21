function Loadimage(url, callback) {
	var img = new Image();
	img.onload = function() {
		callback(!0);
	}, img.onerror = function() {
		callback(!1);
	}, img.src = url;
}

Loadimage($('[data-u="image"]').eq(0).attr("src"), function(exists) {
	exists && runOtherFn();
});
