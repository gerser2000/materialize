
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.addEventListener('deviceready', onDeviceReady, false);
var add_button = document.getElementById("log_button");

var list = document.getElementById("taskList");
function afegeix_tasca(){
	var ntask = document.getElementById("ntask").value;
	console.log("afegint tasca");
	$('#listview').append

}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
	document.getElementById("add_button").onclick = afegeix_tasca;
}
