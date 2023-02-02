window.onload = function() {
	const description = document.getElementById("p-description");
	const readMoreButton = document.getElementById("readMoreButton");
	const projectImage = document.querySelector(".p-image");

	let fullText = description.innerHTML;
	let shortenedText = fullText.substring(0, 400) + "...";

	description.innerHTML = shortenedText;

	readMoreButton.addEventListener("click", toggleDescription);
	projectImage.addEventListener("mouseover", scaleUp);
	projectImage.addEventListener("mouseout", scaleDown);

	function toggleDescription() {
		description.innerHTML = (description.innerHTML === shortenedText) ? fullText : shortenedText;
		readMoreButton.innerHTML = (readMoreButton.innerHTML === "read more") ? "read less" : "read more";
	}

	function scaleUp() {
		projectImage.style.transform = "scale(1.03)";
	}

	function scaleDown() {
		projectImage.style.transform = "scale(1)";
	}
};