function changeContent() {
  const btns = document.querySelectorAll('[data-content-btn]');

  btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const contentBtn = event.currentTarget.getAttribute('data-content-btn');
      const contents = document.querySelectorAll('[data-content-block]');
      const activeContent = document.querySelectorAll(`[data-content-block=${contentBtn}]`);

      contents.forEach((cont) => cont.classList.remove('active'));
      activeContent.forEach((content) => content.classList.add('active'));
      btns.forEach((but) => but.classList.remove('active'));

      btns.forEach((bt) => {
        if (bt.getAttribute('data-content-btn') === btn.getAttribute('data-content-btn')) {
          bt.classList.add('active');
        }
      });
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  changeContent();
});
