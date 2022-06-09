const dateSlider = document.getElementById("date-slider");
const dateDisplay = document.getElementById("date-display");

const dateFormat = new Intl.DateTimeFormat("en", {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
	era: "short"
})

function dateSliderUpdate() {
	const date = new Date(Number(dateSlider.value));
	dateDisplay.innerHTML = dateFormat.format(date)
}
dateSliderUpdate();

dateSlider.addEventListener("input", dateSliderUpdate);