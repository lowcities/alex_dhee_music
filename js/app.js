
const navButton = document.querySelector('.nav-button');
const mobileMenu = document.getElementById('menu');


function mobileMenuToggle(e) {
    if (!mobileMenu.classList.contains('menu-show')) {
        navButton.classList.add('open');
        mobileMenu.classList.add('menu-show');
    }
    else {
        navButton.classList.remove('open');
        mobileMenu.classList.remove('menu-show');
    }
  }

  navButton.addEventListener('click', mobileMenuToggle);