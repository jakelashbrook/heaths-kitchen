
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.36969578150902, lng: -2.5815707678278224 },
    zoom: 20,
    // takes away the build in map controls
    disableDefaultUI: true,
    // Stops the map from zooming or moving whilst user is scrolling
    scrollwheel: false,
    // Sets the map to a static position/ prevents dragging
    draggable: true,
   
    });

     marker = new google.maps.Marker({
      position: { lat: 53.36969578150902, lng: -2.5815707678278224 },
      map: map,   

  });

}

// Show the Information for finding the restaurant when map is clicked on
function showMapInfo() {
  let mapInfo = document.getElementById('map-info');
  mapInfo.classList.remove('d-none');
}

// Hide the Map information 
function hideMapInfo() {
  let mapInfo = document.getElementById('map-info');
  mapInfo.classList.add('d-none');
}



  


