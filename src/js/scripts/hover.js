import { isDesc } from '../functions/check-viewport';

function hoverTxtCard() {
  if (isDesc()) {
    $('.js-hover').on('mouseenter', function () {
      $(this).find('.js-hover-content').stop().slideDown();
    });

    $('.js-hover').on('mouseleave', function () {
      $(this).find('.js-hover-content').stop().slideUp();
    });
  }
}

hoverTxtCard();
