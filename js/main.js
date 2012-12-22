/**
 * Listener for when phonegap is ready
 */
$(function(){
	$(document).on("deviceready", onDeviceReady);
});


/**
 * DeviceReady event callback
 */
function onDeviceReady() {
	navigator.notification.alert("Let's vibrate", vibrate(1000), "Notice", "Oh yeah!")
	
}

/**
 * Vibrates the phone for given number of milliseconds
 */
function vibrate(milliseconds) {
	navigator.notification.vibrate(milliseconds);
}