// map_page_script.js
// JavaScript file for map page
// Mainly for tracking user location

function getLocation() {
    $.get("http://maps.googleapis.com/maps/api/geocode/json?latlng="+
    position.coords.latitude + "," + position.coords.longitude +"&sensor=false")
}