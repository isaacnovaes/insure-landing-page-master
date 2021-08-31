const burger = document.querySelector(".burger"),
	links = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
	if (burger) {
		burger.classList.toggle("active-burger");
		links.classList.toggle("active-burger-content");
		document.body.classList.toggle("overflow-hide");
		Array.from(links.children).forEach((element, index) => {
			element.style.animationDelay = `${index / 5 + 0.5}s`;
		});
	}
});
//Make sure the nav is restyled
window.addEventListener("resize", () => {
	if (window.innerWidth >= 800) {
		burger.classList.remove("active-burger");
		links.classList.remove("active-burger-content");
	}
});
