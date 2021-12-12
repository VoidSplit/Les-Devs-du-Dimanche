document.addEventListener('DOMContentLoaded', init, false);
function init(){
  function toggleMenu () {
    navbar.forEach((nav) => nav.classList.toggle("active"))
  }
  var navbar = document.querySelectorAll('nav');
  var menuButton = document.getElementById('menu');
  menuButton.addEventListener('click', toggleMenu, true);
};