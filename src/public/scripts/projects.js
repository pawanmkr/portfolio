/* window.onload = function() {
	console.log("projects.js loaded");
	const description = document.querySelectorAll(".p-description");
	const readMoreButton = document.getElementById("readMoreButton");
	const projectImage = document.querySelectorAll(".p-image");

	const values = [];
	description.forEach(element => values.push(element.textContent));
	console.log(values);

	let count=0;
	values.forEach(fullText => {
		let shortenedText = fullText.substring(0, 400) + "...";
		description[count].textContent = shortenedText
		count++
	})		

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
}; */