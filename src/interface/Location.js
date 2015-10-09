// var userLocation = {latitude: 0, longitude: 0}

// function setLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         $("#position-coords").append("Geolocation is not supported by this browser.");
//     };
// };

// function showPosition(position) {
//   console.log(position);
//   userLocation.latitude = position.coords.latitude
//   userLocation.longitude = position.coords.longitude
//   console.log(userLocation);
//   // $("#map").html("<br>Latitude: " + position.coords.latitude.toFixed(2) +
//   // "<br>Longitude: " + position.coords.longitude.toFixed(2));
// };


// function showStuff(latitude, longitude) {
//   console.log(userLocation);
//   $("#map").html("<br>Latitude: " + latitude.toFixed(2) +
//     "<br>Longitude: " + longitude.toFixed(2));
// }

// setLocation();
// console.log(userLocation);
// showStuff(userLocation.latitude, userLocation.longitude);


//---------=====

var map;
var infowindow;

function initMap() {
  var initialLocation;
  var makersAcademy = new google.maps.LatLng(51.517404, -0.073485);
  var easterIsland = new google.maps.LatLng(-27.104671, -109.360481);
  var browserSupportFlag = new Boolean();

  map = new google.maps.Map(document.getElementById('map'), {
    center: initialLocation,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();

  // var service = new google.maps.places.PlacesService(map);
  // service.nearbySearch({
  //   location: initialLocation,
  //   // location: {lat: makersAcademy.J, lng: makersAcademy.M},
  //   radius: 1000,
  //   types: ['bowling_alley']
  // }, callback);

  if (navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      console.log(initialLocation.M);
      map.setCenter(initialLocation);
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

