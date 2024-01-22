import { isTablet } from '../functions/check-viewport';
import { fadeIn, fadeOut } from './animation';

function toggleSearch() {
  const searchOpen = document.querySelector('.js-search-open');
  const searchClose = document.querySelector('.js-search-close');
  const searchForm = document.querySelector('.js-search-form');
  const socials = document.querySelector('.js-header-socials');

  searchOpen.addEventListener('click', () => {
    fadeIn(searchForm, 500, 'flex');
    fadeOut(searchOpen, 0);
    fadeIn(searchClose, 500, 'flex');

    if (isTablet()) {
      fadeOut(socials, 0);
    }
  });

  searchClose.addEventListener('click', () => {
    fadeOut(searchForm, 0);
    fadeOut(searchClose, 0);
    fadeIn(searchOpen, 500, 'flex');

    if (isTablet()) {
      fadeIn(socials, 0, 'flex');
    }
  });
}

function toggleBurgerMenu() {
  const burgerOpen = document.querySelector('.js-burger-open');
  const burgerClose = document.querySelector('.js-burger-close');
  const burgerMenu = document.querySelector('.js-burger-menu');

  burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.add('active');
    fadeOut(burgerOpen, 0);
    fadeIn(burgerClose, 500, 'flex');
  });

  burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    fadeOut(burgerClose, 0);
    fadeIn(burgerOpen, 500, 'flex');
  });
}

function hoverLink() {
  const links = document.querySelectorAll('.js-header-link');

  links.forEach((link) => {
    const linkMenu = link.querySelector('.js-header-links');

    link.addEventListener('mouseover', function () {
      linkMenu.classList.add('active');
      this.classList.add('active');
    });

    link.addEventListener('mouseout', () => {
      linkMenu.classList.remove('active');

      links.forEach((li) => li.classList.remove('active'));
    });
  });
}

function hoverSubLinks() {
  const links = document.querySelectorAll('.js-header-sublink');
  const mainLinks = document.querySelector('.js-header-links');

  links.forEach((link) => {
    const linkMenu = link.querySelector('.js-header-sublinks');

    link.addEventListener('mouseover', function () {
      this.classList.add('active');
      linkMenu.classList.add('active');
      mainLinks.classList.add('hover');
    });

    link.addEventListener('mouseout', () => {
      linkMenu.classList.remove('active');
      mainLinks.classList.remove('hover');
      links.forEach((li) => li.classList.remove('active'));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  toggleSearch();
  toggleBurgerMenu();
  hoverLink();
  hoverSubLinks();
});
