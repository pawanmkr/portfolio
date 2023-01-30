window.onload = function() {
    document.querySelector(".command-input-box").focus();
    document.querySelector(".command-input-box").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            let command = document.querySelector(".command-input-box").value.toLowerCase();
            console.log(command);
            if (command === "cd projects") {
                window.location.href = "/projects";
            } else if (command === "cd resume") {
                window.location.href = "/resume";
            } else if (command === "cd github") {
                window.location.href = "https://github.com/pawanmkr/";
            } else if (command === "cd email") {
                window.location.href = "mailto:iampawanmkr@gmail.com";
            };
        }
    });
};