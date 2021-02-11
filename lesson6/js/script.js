//footer year 

const year = { year: "numeric" };

document.getElementById("year").textContent = new Date().toLocaleDateString(
  "en-US",
  year
);

//current date footer
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

const datefield = document.getElementById("date");

datefield.textContent = fulldate;

//hamburger menu

function toggleMenu() {
  document.getElementById("toggleNav").classList.toggle("hide");
}
// Friday banner pop up

function showhide() {
  var d = new Date();
  var s = document.getElementById("announcement");
  if (d.getDay() == 5) {
    s.style.display = s.style.display == "block" ? "none" : "block";
  }
}
showhide();

//wind chill in weather summary box

var tempF = document.getElementById("temp").innerHTML;
var windSpeed = document.getElementById("windSpeed").innerHTML;

 var f = windChill(tempF, windSpeed);

document.getElementById("windChill").innerHTML = f.toFixed(0) 
 ;

function windChill(tempF, windSpeed) {

  var t = tempF;
  var s = windSpeed;

if (t<=50 && s>3.0) {

  return 35.74 + (.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
}
document.getElementById("windChill").innerHTML = tempF;
}