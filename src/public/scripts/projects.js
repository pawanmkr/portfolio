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

	// command options
	document.querySelector(".command-input-box").focus();
    document.querySelector(".command-input-box").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            let command = document.querySelector(".command-input-box").value.toLowerCase();

			if (command === "cd projects") {
                window.location.href = "/projects";
            }
			else if (command === "cd resume") {
                window.location.href = "/resume";
            }
			else if (command === "cd home") {
                window.location.href = "/";
            }
			else if (command === "cd github") {
                window.location.href = "https://github.com/pawanmkr/";
            }
			else if (command === "send mail") {
                window.location.href = "mailto:iampawanmkr@gmail.com";
            };
        }
    });
};