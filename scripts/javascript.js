function initMap() {
  
      var geocoder = new google.maps.Geocoder();
  
      var locations = [
          ['Chester', 53.183497, -2.890605, 3, 'https://www.google.co.uk'],
          ['Manchester', 53.474103, -2.243593, 2, 'https://www.google.co.uk'],
          ['Liverpool', 53.421206, -2.945146, 1, 'https://www.google.co.uk/']
      ];

      var dealerships = {
        title: "METROPOLIS MOTORCYCLES",
        title: "CARL ROSNER MOTORCYCLES",
        city: "Manchester",
        region: "North west"
      }
      
      
  
      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: new google.maps.LatLng(53.381021, -2.608138),
          mapTypeId: google.maps.MapTypeId.TERRAIN,
  
      });
  
      var infowindow = new google.maps.InfoWindow();
  
  
      for (var i = 0; i < locations.length; i++) {
          var latLng = { lat: locations[i][1], lng: locations[i][2] };
          resolveAddressByLatLng(geocoder, latLng, (function(loc) {
  
                  return function(result) {
                      //console.log(location);
  
                      var marker = new google.maps.Marker({
                          position: new google.maps.LatLng(loc[1], loc[2]),
                          url: loc[4],
                          map: map
                      });
  
  
                      google.maps.event.addListener(marker, 'click', function() {
                          infowindow.setContent(result[0].formatted_address);
                          infowindow.open(map, marker);
                      });
  
                  }
  
              })(locations[i]),
              function(status) {
                  console.log("Geocode was not successful for the following reason: " + status);
              });
  
  
      }
  }
  
  
  function resolveAddressByLatLng(geocoder, latLng,success,error) {
      geocoder.geocode({ 'location': latLng }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
              success(results);
          } else {
              error(status);
          }
      });
  }


  