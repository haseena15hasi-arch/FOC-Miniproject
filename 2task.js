const animalTitle = document.getElementById('animal-name');
const messageArea = document.getElementById('message-area');

animalTitle.addEventListener('mouseenter', () => {
    animalTitle.textContent = "Milo";
});

animalTitle.addEventListener('mouseleave', () => {
    animalTitle.textContent = "Cat";
});

setTimeout(() => {
    messageArea.textContent = "Welcome to the Animal Page!";
}, 3000);
