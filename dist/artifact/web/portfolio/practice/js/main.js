'use strict';
{
  const works = document.querySelectorAll('.works');

function callback(entries, obs){
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
    return;
    }
    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
  });
  
}

const options = {
  threshold: 0.3,
};

  const observer = new IntersectionObserver(callback, options);

  works.forEach(work => {
    observer.observe(work);
  });
}


