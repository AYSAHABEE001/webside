const nav = document.getElementById('nav');
const manu = document.getElementById('manu');
const body = document.getElementById('body');

function toggleMenu() {
  if (window.matchMedia("(max-width: 520px)").matches) {
    manu.style.display = manu.style.display === 'block' ? 'none' : 'block';
  }
}

function hideMenu(e) {
  if (window.matchMedia("(max-width: 520px)").matches) {
    if (!manu.contains(e.target) && !nav.contains(e.target)) {
      manu.style.display = 'none';
    }
  }
}

nav.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});
body.addEventListener('click', hideMenu);
