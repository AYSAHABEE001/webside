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

// ===== SELECT ELEMENTS SAFELY =====
const ay = document.body;
const deen = document.getElementById('manu');
const darkToggle = document.getElementById('darkModeToggle');

// ===== DARK MODE (SAFE) =====
if (localStorage.getItem('darkMode') === 'enabled') {
  ay.classList.add('dark');
}

darkToggle.addEventListener('click', function (e) {
  e.preventDefault();

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});
