function toggleReadMore(link) {
    var cardText = link.previousElementSibling;
    var isExpanded = link.getAttribute('data-expanded') === 'true';
    
    if (isExpanded) {
        cardText.style.height = "120px";
        link.innerText = "Ler mais";
        link.setAttribute('data-expanded', 'false');
    } else {
        cardText.style.height = "auto";
        link.innerText = "Ler menos";
        link.setAttribute('data-expanded', 'true');
    }
}
