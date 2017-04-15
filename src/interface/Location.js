var map;
var infowindow;

function initMap() {
  var initialLocation;
  var makersAcademy = new google.maps.LatLng(51.517404, -0.073485);
  var easterIsland = new google.maps.LatLng(-27.104671, -109.360481);
  var browserSupportFlag = new Boolean();

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14
  });

  infowindow = new google.maps.InfoWindow();

  if (navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.setCenter(initialLocation);

      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: initialLocation,
        radius: 10000,
        types: ['bowling_alley']
      }, callback);

    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  } else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  };

  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed.");
      initialLocation = makersAcademy;
    } else {
      alert("Your browser doesn't support geolocation. We've sent you to Easter Island.");
      initialLocation = easterIsland;
    }
    map.setCenter(initialLocation);
  };

}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

