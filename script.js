//your code here!


const list = document.querySelector("ul");

// Add 10 list items initially
let count = 1;

function addItems(number) {
    for (let i = 0; i < number; i++) {
        const li = document.createElement("li");

        li.textContent = `List Item ${count}`;

        list.appendChild(li);

        count++;
    }
}

// Initial 10 items
addItems(10);

// Add 2 items when user reaches the bottom
window.addEventListener("scroll", function() {
    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
    ) {
        addItems(2);
    }
});
