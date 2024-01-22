export const isDesc = () => {
  if (window.innerWidth >= 1198) {
    return true;
  }

  return false;
};

export const isMobile = () => {
  if (window.innerWidth < 768) {
    return true;
  }

  return false;
};

export const isTablet = () => {
  if (window.innerWidth >= 767 && window.innerWidth < 1198) {
    return true;
  }

  return false;
};

export const isDesktop = () => {
  if (window.innerWidth > 1025) {
    return true;
  }

  return false;
};
