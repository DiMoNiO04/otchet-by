import { throttle } from './throttle';

const fixFullheight = () => {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const fixHeight = throttle(fixFullheight);

fixHeight();

window.addEventListener('resize', fixHeight);
