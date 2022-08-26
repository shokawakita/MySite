'use strict';

{
  const images = [
    '../img/pic00.png',
    '../img/pic01.png',
    '../img/pic02.png',
    '../img/pic03.png',
    '../img/pic04.png',
    '../img/pic05.png',
    '../img/pic06.png',
    '../img/pic07.png',
  ]
  let currentIndex = 0;

  const display = document.getElementById('display')
  display.src = images[currentIndex];
  

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    const li = document.createElement('li');
    li.appendChild(img);
    document.getElementById('slides').appendChild(li);

    
    if(index === currentIndex) {
      li.classList.add('current');
    }

    li.addEventListener('click', () => {
      const slides = document.querySelectorAll('#slides li');
      slides[currentIndex].classList.remove('current');
      currentIndex = index;
      if(index === currentIndex) {
        slides[currentIndex].classList.add('current');
        display.src = image;
      }
    });
  });  
  
  let target;

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    target = currentIndex + 1;
    if(target > images.length - 1) {
      target = 0;
    }
    document.querySelectorAll('#slides li')[target].click();
  });

  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    target = currentIndex - 1;
    if(target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll('#slides li')[target].click();
  });

  let timeoutId;
  function slideShow() {
      timeoutId = setTimeout(() => {
        next.click(); 
        slideShow();
      },1000);
  }

  let slideShowPlay = true;
  const play = document.getElementById('play');
  play.addEventListener('click', () => {
    if(slideShowPlay === true) {
       slideShow();
      play.textContent = "pause";
    } else {
      clearTimeout(timeoutId);
      play.textContent = "Play";
    }

    slideShowPlay = !slideShowPlay;
  });

}