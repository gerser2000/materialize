// Arxiu init.js + index.js


  // Or with jQuery

   

(function($){
  $(function(){
 

  var options = { "swipeable": true };
  var el = document.getElementById('tabs');
  var instance = M.Tabs.init(el, options);
  
  $('.sidenav').sidenav();
 
  }); // end of document ready
})(jQuery); // end of jQuery name space
 
var bcerca = document.getElementById("bcerca");



function buscar(){
    var cerca = document.getElementById("cerca").value;
    $("#artlistas").empty();
    $.ajax({
        method: "GET",
        url: "https://musicbrainz.org/ws/2/artist?query="+cerca,
        dataType: "json",   
      }).done(function (msg) {
        for(var item in msg.artists) {
          console.log(msg.artists[item].name);
          $("#artlistas").append('<li class="collection-item avatar black "><a href="https://musicbrainz.org/artist/'+msg.artists[item].id+'"><i class="material-icons circle red">play_arrow</i><span class="title"><b>' + msg.artists[item].name + '</b></span><p>' + msg.artists[item].disambiguation + '</p></a></li>')

         
        };
      }).fail(function () {
          alert("ERROR");
      });
}

document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById("bcerca").onclick = buscar;
    //document.getElementById('deviceready').classList.add('ready');
}

