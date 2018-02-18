var map;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: {
      lat: 53.47282,
      lng: -2.24651
    }
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('search').addEventListener('click', function () {
    geocodeAddress(geocoder, map);
  });
  document.getElementById('use-location').addEventListener('click', function () {
    getLocation();
  });
  function getLocation() {
    if (navigator.geolocation) {
      console.log("hola");
      navigator.geolocation.getCurrentPosition(showPosition);

    } else {
      getUserLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    console.log("hello");
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    map.setCenter(new google.maps.LatLng(lat, lng));
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: map,
    });
  }
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('postcode-box').value;
  geocoder.geocode({
    'address': address
  }, function (results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });

}