'use strict';

{
  // Intersectionobserverでheaderとto-topを監視する
  const pageTop = document.getElementById('to-top');
  const header = document.querySelector('header');

  function callback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        pageTop.classList.add('appear');
        header.classList.add('appear');
      } else {
        pageTop.classList.remove('appear');
        header.classList.remove('appear');
      }
    });
  }

  const observer = new IntersectionObserver(callback);

  observer.observe(document.getElementById('target'));

  // to-topのスクロールをなめらかにする
  pageTop.addEventListener('click', (el) => {
    el.preventDefault();
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
  });
}