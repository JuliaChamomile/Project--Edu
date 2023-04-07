const colorProperties = {
    "Science": "#50C4EE",
    "Design": "#EE71C7",
    "Food": "#9177F5",
    "Tech": "#5C4CEB",
    "Music": "#95D354",
    "Medicine": "#603DBB"
}
const cardsList = document.querySelectorAll('.courses__card-bt');
const menuNavElemets = document.querySelectorAll('.courses__link');

menuNavElemets.forEach ((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const property = e.target.dataset.id;

        if (property === 'All') {
            location. reload();
            return

        }
        
        cardsList.forEach((cardItem) => {
            cardItem.innerText = property;
            cardItem.style.backgroundColor = colorProperties[property];
        })
    });
});

