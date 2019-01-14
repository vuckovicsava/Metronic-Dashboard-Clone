const hamburgerBtn = document.querySelector('#hamburger-btn');
const sidebar = document.querySelector('.sidebar');

hamburgerBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});