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
	
	// test vibrate button
	$('#vibrate-button').on('click', function() {
		navigator.notification.vibrate(1000);
	});
	
	// test beep button
	$('#beep-button').on('click', function() {
		navigator.notification.beep(1);
	});
	
	// test alert button
	$('#alert-button').on('click', function() {
		navigator.notification.alert('Device Name: '     + device.name     + '\n' +
		                             'Device PhoneGap: ' + device.phonegap + '\n' + 
		                             'Device Platform: ' + device.platform + '\n' + 
		                             'Device UUID: '     + device.uuid     + '\n' + 
		                             'Device Version: '  + device.version  + '\n', null, 'Phone Info');
	});
}


/*******************************************************************************
 * Vibrates the phone for given number of milliseconds
 * 
 ******************************************************************************/
