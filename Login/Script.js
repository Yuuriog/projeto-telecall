const darkModeToggle = document.getElementById('dark-mode-toggle');
const card = document.querySelector('.card');

darkModeToggle.addEventListener('click', () => {
  card.classList.toggle('dark-mode');
})


