function toggleReadMore(link) {
    var cardText = link.previousElementSibling;
    if (link.innerText === "Ler mais") {
        cardText.style.height = "auto";
        link.innerText = "Ler menos";
    } else {
        cardText.style.height = "120px";
        link.innerText = "Ler mais";
    }
}
