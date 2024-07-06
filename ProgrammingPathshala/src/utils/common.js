export const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 800) {
    return { right: !menuOpened && "-100%" };
  }
};

export const sliderSettings = {
  slidesPerView: 3,
  spaceBetween: 60,
  breakpoints: {
    480: {
      slidesPerView: 3
    },
    600: {
      slidesPerView: 3
    },
    750: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 3
    },
  },

};
