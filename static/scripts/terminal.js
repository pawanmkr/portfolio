window.onload = function() {
    console.log("js loaded");
    document.querySelector(".command-input-box").focus();
    document.querySelector(".command-input-box").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            let command = document.querySelector(".command-input-box").value.toLowerCase();
            console.log(command);
            if (command === "cd projects") {
                window.location.href = "/projects";
            }
            else if (command === "cd contact") {
                window.location.href = "/contact";
            } 
            else if (command === "show resume") {
                window.location.href = "/resume";
            } 
            else if (command === "show github") {
                window.location.href = "https://github.com/pawanmkr/";
            } 
            else if (command === "send email") {
                window.location.href = "mailto:iampawanmkr@gmail.com";
            }  
            else if (command === "cd" || "cd  ") {
                window.location.href = "/";
            }   
            else if (command === "cd skills") {
                window.location.href = "/skills";
            }
        }
    });
};