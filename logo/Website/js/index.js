const body = document.querySelector(".body");
const launchH1 = document.querySelector(".launch h1");

// Mouse on body
body.addEventListener("mouseover", () => {
    launchH1.style.color = "White";
    launchH1.style.transition = "color 1s, webkitTextStroke 1s";
    // launchH1.style.webkitTextStroke = "1px black";
});

// Mouse out of body
body.addEventListener("mouseout", () => {
    launchH1.style.color = "Black";
    launchH1.style.webkitTextStroke = "0";
});
