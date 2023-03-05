let h1 = document.querySelectorAll("h1");

window.addEventListener("load", () => {
    h1.forEach((item) => {
        count_up(item, parseInt(item.getAttribute("data-set")));
    });
});

// count_up();

function count_up(element, number) {
    let curr = 0;
    let step = number / 200;
    let interval = setInterval(() => {
        if (curr >= number) {
            clearInterval(interval);
        } else {
            curr += step;
            element.innerText = Math.ceil(curr);
        }
    }, 10);
}
