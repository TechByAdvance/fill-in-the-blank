let blank = document.querySelectorAll(".blank");
for (let i = 0; i < blank.length; i++) {
    blank[i].addEventListener("click", () => {
        blank[i].classList.toggle("true");
    })
}