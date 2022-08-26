const toggleBtn = document.getElementsByClassName('toggle')[0];
const navLists = document.getElementsByClassName('nav-lists')[0];

toggleBtn.addEventListener('click', () => {
  navLists.classList.toggle('active');
});
