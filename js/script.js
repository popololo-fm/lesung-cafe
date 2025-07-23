// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Tombol menu diklik
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

console.log("Script aktif!");

document.querySelector('#menu').onclick = () => {
  console.log("Menu diklik!");
  document.querySelector('.navbar-nav').classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector ('#menu');
document.addEventListener('click', function(e) {
    if(!menu.contains(e.target)  && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})