/*******************************************************************************
 * Listener for when phonegap is ready
 * 
 ******************************************************************************/
$(function(){
	$(document).on("deviceready", onDeviceReady);
	
	// If testing on web browser load phonegap_browsertest.js
	// todo
});


/*******************************************************************************
 * DeviceReady event callback
 * All PhoneGap API calls should be initiated here to to ensure PhoneGap is loaded
 * 
 ******************************************************************************/
function onDeviceReady() {
	navigator.notification.alert("Let's vibrate", vibrate(1000), "Notice", "Oh yeah!")
	
}


/*******************************************************************************
 * Vibrates the phone for given number of milliseconds
 * 
 ******************************************************************************/
function vibrate(milliseconds) {
	navigator.notification.vibrate(milliseconds);
}