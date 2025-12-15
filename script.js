let themeUserInputEl = document.getElementById("themeUserInput");
let bgContainer = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");


themeUserInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let input = themeUserInputEl.value;
        if (input === "Dark") {
            bgContainer.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
            headingEl.style.color = "#014d40";
        } else if (input === "Light") {
            bgContainer.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
            headingEl.style.color = "#014d40";
        } else {
            alert("Enter valid theme");
            return;
        }
    }
});
