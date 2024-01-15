$blanks = document.querySelectorAll(".blank");
for (let $blank of $blanks) {
    $blank.addEventListener("click", () => {
        $blank.classList.toggle("true");
    })
}