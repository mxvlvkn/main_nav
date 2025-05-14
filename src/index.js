import './scss/styles.scss';

////////////////////////////////////////////////////////////////////////

// HEADER__NAV //
const HeaderNavBtn = document.querySelector('.header__nav-btn-container');
const HeaderNav = document.querySelector('.header__nav');

HeaderNavBtn.addEventListener('click', () => {
    if (HeaderNavBtn.classList.contains('_open')) {
        HeaderNavBtn.classList.remove('_open');
        HeaderNav.classList.remove('_open');
    } else {
        HeaderNavBtn.classList.add('_open');
        HeaderNav.classList.add('_open');
    }
  });
//END //

// INDEX SLIDER //
const swiper = new Swiper('.main-slider', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1
        },
        430: {
          slidesPerView: 2
        },
        700: {
            slidesPerView: 3
        },
        900: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 5
        }
    }
  });
// END //

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PAGE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

// IMG SLIDER //
const IMGSwiper = new Swiper('.img-slider', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        850: {
          slidesPerView: 2
        },
        1500: {
          slidesPerView: 3
        }
    }
  });
// END //

// CHANGE HEADER COLOR //
const Header = document.querySelector('.header');
const HeaderTop = document.querySelector('.header__top');

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
      HeaderTop.classList.add('transparent-back');
  } else {
      HeaderTop.classList.remove('transparent-back');
  }
});
// END //

/// FULL IMG SHOW
const IMGS = document.querySelectorAll('.show-img');
const FullIMG = document.querySelector('.full-img');
const FullIMGClose = FullIMG.querySelector('.full-img__close');
const FullIMGSliderWrapper =  document.querySelector('.full-img-slider__wrapper');

IMGS.forEach(img => {
  img.addEventListener('click', (event) => {
    const IMGIndex = Number(event.target.closest('.img-slider__item').getAttribute('data-swiper-slide-index'));
    FullIMGSwiper.slideTo(IMGIndex);
    
    FullIMG.classList.toggle('_show');    
  
    event.stopPropagation();
  });
})

FullIMGClose.addEventListener('click', (event) => {
  FullIMG.classList.remove('_show');
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.full-img')) {
    FullIMG.classList.remove('_show');
  }
});
// END //

// Full IMG SLIDER //
const FullIMGSwiper = new Swiper('.full-img-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1
        },
        430: {
          slidesPerView: 1
        },
        700: {
            slidesPerView: 1
        },
        900: {
          slidesPerView: 1
        },
        1200: {
          slidesPerView: 1
        }
    }
  });
// END //

