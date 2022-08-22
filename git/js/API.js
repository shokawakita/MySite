'use strict';

{
  const profile = document.getElementById('profile-img');
  const skillsImgs = document.querySelectorAll('.skills-imgs img');
  const hobbyImg = document.querySelectorAll('.hobby-imgs img');
  
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
  hobbyImg.forEach(hobby => {
    observers.observe(hobby);
  });
}