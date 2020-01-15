
const mainBanner =document.querySelector('.main-banner');
const navButton = document.querySelector('.nav-button');
const mobileMenu = document.getElementById('menu');
const title = document.querySelector('.title');

//Function to show or hide menu bar depending on screen size
function checkSize() {
    if(window.innerWidth <= 767) {
        mobileMenu.classList.remove('menu-show');
        mobileMenu.classList.add('sticky-mobile');
        navButton.classList.remove('open');
  } else {
      mobileMenu.classList.add('menu-show');
      mobileMenu.classList.remove('sticky-mobile');
      }
    }

// Function to open or close nav menu when button is clicked
function mobileMenuToggle(e) {
    // if nav menu isnt visible
    if (!mobileMenu.classList.contains('menu-show')) {
        // initiate css animation for nav button when clicked
        navButton.classList.add('open');
        // open nav menu
        mobileMenu.classList.add('menu-show');
    }
    // if menu is visible
    else {
        // revert button to closed state
        navButton.classList.remove('open');
        // hide nav menu
        mobileMenu.classList.remove('menu-show');
    }
  }

  //Creates a sticky mobile toggle button when window is scrolled to top of mobile menu button
function stickyNavButton(e) {
    if(window.innerWidth <= 767 && window.scrollY >= 10) {
        navButton.classList.add('sticky-nav-button');
        title.classList.add('sticky-title');
    }
    else {
        navButton.classList.remove('sticky-nav-button');
        title.classList.remove('sticky-title');
    }
}

//creates a sticky nav bar when window is scrolled to the top of nav bar.
function stickyNav(e) {
    if(window.innerWidth >= 767 && window.scrollY >= mainBanner.offsetHeight) {
      mobileMenu.classList.add('sticky-nav-bar');
    } else  {
      mobileMenu.classList.remove('sticky-nav-bar');
    }
  }

window.addEventListener('load', checkSize);

window.addEventListener('scroll', stickyNavButton);

window.addEventListener('scroll', stickyNav);
    
navButton.addEventListener('click', mobileMenuToggle);

$(window).resize(checkSize);
