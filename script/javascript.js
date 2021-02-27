const year = { year: "numeric" };

const date = document.lastModified;

document.getElementById("year").textContent = new Date().toLocaleDateString(
  "en-US",
  year
);
document.getElementById("date").textContent = date;
console.log(date);

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

function selectRegion() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#stormRegion');
	s.style.display = "block";
	s.textContent = sel.value;
	
}