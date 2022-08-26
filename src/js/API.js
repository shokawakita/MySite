'use strict';

export default function API() {
  const profile = document.getElementById('profile-img');
  const skillsImgs = document.querySelectorAll('.skills-imgs img');
  
  function callback(entries, obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }
  const options = {threshold: .25};
  const observers = new IntersectionObserver(callback, options);

  observers.observe(profile);
  skillsImgs.forEach(skill => {
    observers.observe(skill);
  });
}

