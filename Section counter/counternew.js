let numberdisp =  document.querySelectorAll(".counter-n");
let counterSection = document.querySelector(".count-container");
let interval = 4000;

function startCounter() {
    numberdisp.forEach((number) => {
        let startval = 0;
        let endval = parseInt(number.getAttribute("data-val"));
        let duration = Math.floor(interval / endval);

        let counter = setInterval(() => {
            startval += 1;
            number.textContent = startval + "+";

            if (startval === endval) {
                clearInterval(counter);
            }
        }, duration);
    });
}

function isElementInViewport() {
    const rect = counterSection.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
    );
}

function checkCounterSection() {
    if (isElementInViewport()) {
        startCounter();
        // Remove the scroll event listener once the counter has started
        window.removeEventListener("scroll", checkCounterSection);
    }
}

// Add a scroll event listener 
window.addEventListener("scroll", checkCounterSection);

// Check on page load 
checkCounterSection();

