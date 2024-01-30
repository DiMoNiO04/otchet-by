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
  const links = document.querySelectorAll('.header__bottom-list > .menu-item-has-children');

  links.forEach((link) => {
    const linkMenu = link.querySelector('.sub-menu');

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
  const links = document.querySelectorAll('.header__bottom-list > li > ul > .menu-item-has-children');
  const mainLinks = document.querySelector('.header__bottom-list > li > ul');

  links.forEach((link) => {
    const linkMenu = link.querySelector('.header__bottom-list > li > ul > li > ul');

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
function addBirdIcon() {
  const links = document.querySelectorAll('.menu-item-has-children');

  links.forEach((link) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('viewBox', '0 0 20 20');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M5 7.5L10 12.5L15 7.5');
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');

    svg.appendChild(path);
    link.appendChild(svg);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  toggleSearch();
  toggleBurgerMenu();
  hoverLink();
  hoverSubLinks();
  addBirdIcon();
});
