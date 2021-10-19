const screenEntered = document.querySelector(".screen-entered");
const chart_01 = document.querySelector(".chart-01");
const chart_02 = document.querySelector(".chart-02");
const chart_03 = document.querySelector(".chart-03");

let pageSlider = new Swiper(".page", {
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",
	direction: "vertical",
	slidesPerView: "auto",
	parallax: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: {
		sensitivity: 1,
	},
	watchOverflow: true,
	speed: 1700,
	observer: true,
	observerParents: true,
	observeSlideChildren: true,
});


pageSlider.on("slideNextTransitionStart", function () {
	if (screenEntered.classList.contains("swiper-slide-active")) {
		setTimeout(() => {
			animateValue(chart_01, 0, 16, 2000);
		}, 1000);
		setTimeout(() => {
			animateValue(chart_02, 0, 78, 2000);
		}, 1300);
		setTimeout(() => {
			animateValue(chart_03, 0, 69, 2000);
		}, 1600);
	}
});


//=====================================================================================
function animateValue(obj, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start) + start);
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}