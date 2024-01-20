import { isDesc } from '../functions/check-viewport';

function hoverTxtCard() {
  if (isDesc()) {
    $('.card').on('mouseenter', function () {
      $(this).find('.card__content-txt').stop().slideDown();
    });

    $('.card').on('mouseleave', function () {
      $(this).find('.card__content-txt').stop().slideUp();
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  hoverTxtCard();
});
