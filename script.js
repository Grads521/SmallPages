const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header__second__list');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
