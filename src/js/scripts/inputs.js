function inputsDef() {
  if (document.querySelector('.input')) {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach((input) => {
      const inp = input.querySelector('input');
      if (inp.getAttribute('disabled') !== null) {
        input.classList.add('--disabled');
      } else {
        input.classList.remove('-disabled');
      }
    });

    inputs.forEach((input) => {
      const inp = input.querySelector('input');
      const inpBlock = input.querySelector('.input__input');

      if (inpBlock) {
        inpBlock.addEventListener('click', () => inp.focus());

        inp.addEventListener('focus', () => input.classList.add('--focus'));
        inp.addEventListener('blur', () => input.classList.remove('--focus'));
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  inputsDef();
});
