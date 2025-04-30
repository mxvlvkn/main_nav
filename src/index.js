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