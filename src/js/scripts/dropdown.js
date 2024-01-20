function dropdownShowHide() {
  $('.js-dropdown').each(function () {
    const dropdown = $(this);
    const dropdownInner = dropdown.find('.js-dropdown-inner');
    const dropdownContent = dropdown.find('.js-dropdown-content');

    dropdownInner.on('click', () => {
      dropdownContent.slideToggle();
      dropdownInner.toggleClass('active');
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  dropdownShowHide();
});
