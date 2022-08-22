'use strict';

{
  function inViewCallback(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function slideCallback(entries) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        header.classList.add('appear');
        topPage.classList.add('appear');
      } else {
        header.classList.remove('appear');
        topPage.classList.remove('appear');
      }
    });
  }

  const header = document.querySelector('header');
  const topPage = document.getElementById('page-top');

  const slideObserver = new IntersectionObserver(slideCallback);
  const inViewObserver = new IntersectionObserver(inViewCallback, {
    threshold: 0.2,
  });
  
  document.querySelectorAll('.animate').forEach(target => {
    inViewObserver.observe(target);
  });

  slideObserver.observe(document.getElementById('target'));

  topPage.addEventListener('click', (el) => {
    el.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });


}