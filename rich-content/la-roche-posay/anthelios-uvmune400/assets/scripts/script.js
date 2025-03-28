const accTab = document.querySelectorAll('#es-rc #es-rc-content .acc-tab');

for (let i = 0; i < accTab.length; i++) {
  accTab[i].addEventListener('click', function () {
    this.classList.add('active');
    let accTabContent = this.nextElementSibling;

    const hideContent = () => {
      accTabContent.style.maxHeight = null;
      this.classList.remove('active');
    };

    const showContent = () => {
      accTabContent.style.maxHeight = accTabContent.scrollHeight + 'px';
      this.classList.add('active');
    };

    if (accTabContent.style.maxHeight) {
      hideContent();
    } else {
      showContent();
    }
  });
}

const baseWrapperSelector = '#es-rc #es-rc-content';

const swiper1Wrapper = baseWrapperSelector + ' .es-cross-mobile';
const swiper1Selector = swiper1Wrapper + ' .es-swiper1';
const swiper1 = new Swiper(swiper1Selector, {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.es-swiper1-pagination',
  },

  navigation: {
    nextEl: '.es-swiper1-button-next',
    prevEl: '.es-swiper1-button-prev',
  },

});

const swiper2Wrapper = baseWrapperSelector + ' .es-products-mobile';
const swiper2Selector = swiper2Wrapper + ' .es-swiper2';
const swiper2 = new Swiper(swiper2Selector, {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.es-swiper2-pagination',
  },

  navigation: {
    nextEl: '.es-swiper2-button-next',
    prevEl: '.es-swiper2-button-prev',
  },
});