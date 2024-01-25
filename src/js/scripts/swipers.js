import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

function initTeamSlider() {
  if (document.querySelector('.team__swiper')) {
    const slider = document.querySelector('.team__swiper');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');
    const bullets = slider.parentElement.querySelector('.team__bullets');

    new Swiper(slider, {
      modules: [Navigation, Pagination],
      spaceBetween: 20,
      loop: true,
      observer: true,
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      pagination: {
        el: bullets,
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      },
    });
  }
}

function initReviewsSlider() {
  if (document.querySelector('.reviews__swiper')) {
    const slider = document.querySelector('.reviews__swiper');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');
    const bullets = slider.parentElement.querySelector('.reviews__bullets');

    new Swiper(slider, {
      modules: [Navigation, Pagination],
      spaceBetween: 20,
      autoHeight: true,
      loop: true,
      observer: true,
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      pagination: {
        el: bullets,
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      },
    });
  }
}

function initSimilarArticlesSlider() {
  if (document.querySelector('.similar-articles__swiper')) {
    const slider = document.querySelector('.similar-articles__swiper');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');
    const bullets = slider.parentElement.querySelector('.similar-articles__bullets');

    new Swiper(slider, {
      modules: [Navigation, Pagination],
      spaceBetween: 20,
      observer: true,
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      pagination: {
        el: bullets,
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2,
          loop: false,
        },
        1280: {
          slidesPerView: 3,
          loop: true,
        },
      },
    });
  }
}

function initSliders() {
  initTeamSlider();
  initReviewsSlider();
  initSimilarArticlesSlider();
}

window.addEventListener('DOMContentLoaded', initSliders);
