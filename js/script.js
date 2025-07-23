const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

// Tombol hamburger diklik
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle('active');
  console.log("Menu diklik!");
};

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener('click', function(e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

console.log("Script aktif!");