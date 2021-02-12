var tempF = document.getElementById("temp").innerHTML;
var windSpeed = document.getElementById("windSpeed").innerHTML;

var f = windChill(tempF, windSpeed);

document.getElementById("windChill").innerHTML = f.toFixed(0) + "&deg" + " F";

function windChill(tempF, windSpeed) {
  var t = tempF;
  var s = windSpeed;

  if (t <= 50 && s > 3.0) {
    return (
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(s, 0.16) +
      0.4275 * t * Math.pow(s, 0.16)
    );
  }
  document.getElementById("windChill").innerHTML = "N/A";
}