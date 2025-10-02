// ---------------- Part 2: JS Functions ----------------

// Counter with local & global scope
let counter = 0; // global variable

function incrementCounter(step) {
    // step is a parameter
    counter += step; // modify global variable
    return counter; // return the new value
}

const counterSpan = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
    const newCount = incrementCounter(1);
    counterSpan.textContent = newCount;
});

// ---------------- Part 3: CSS + JS ----------------

// Function to trigger animation
function animateElement(element) {
    element.classList.add("animate");

    // Remove class after animation ends to allow re-trigger
    element.addEventListener("animationend", () => {
        element.classList.remove("animate");
    }, { once: true });
}

const box = document.getElementById("box");
const animateBoxBtn = document.getElementById("animateBoxBtn");

animateBoxBtn.addEventListener("click", () => {
    animateElement(box);
});
