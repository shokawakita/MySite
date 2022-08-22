'use strict';

{
  const targets = document.querySelectorAll('.animate');
  const toTop = document.getElementById('to-top');
  const header = document.querySelector('header');

  function slideCallback(entries, obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function fromTopCallback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        toTop.classList.add('appear');
        header.classList.add('appear');
      } else {
        toTop.classList.remove('appear');
        header.classList.remove('appear');
      }
    });
    
  }
  const options = {threshold : 0.3};
  const slideObservers = new IntersectionObserver(slideCallback,options);
  const fromTopObservers = new IntersectionObserver(fromTopCallback);

  targets.forEach(target => {
    slideObservers.observe(target);
  });

  fromTopObservers.observe(document.getElementById('target'));

}