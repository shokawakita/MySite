'use strict';

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.getElementById('slide');
  const images = [
    "img/tokyo(ebisu1).fd.jpeg",
    "img/tokyo(ebisu2)fd.jpeg",
    "img/tokyo(ebisu3)fd.jpeg",
    "img/tokyo(ginza1).fd.jpeg",
    "img/tokyo(ginza2).fd.jpeg",
    "img/tokyo(ginza3).fd.jpeg",
    "img/tokyo(ginza4).fd.jpeg",
    "img/tokyo(ginza5).fd.jpeg",
    "img/tokyo(sibuya1).fd.jpeg",
    "img/tokyo(sinuya2).fd.jpeg"
  ];

  let currentIndex = 0;
  const dots = [];

  // next,prevボタンのコントロール
  function buttonControl(){
    next.classList.remove('hidden');
    prev.classList.remove('hidden');
    if(currentIndex === 0){
      prev.classList.add('hidden');
    }
    if(currentIndex === images.length - 1){
      next.classList.add('hidden')
    }
  }
// button生成
  function createButton(){
    for(let i = 0; i < images.length; i++){
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        dots.forEach(dot => {
          dot.classList.remove('current');
          dots[i].classList.add('current');
          buttonControl();
          moveSlides();
        });
      });
      dots.push(button);
      document.getElementById('create').appendChild(button);
    }
    dots[0].classList.add('current');
  }
// 画像の生成
  function createImages(){
    for(let i = 0; i < images.length; i++){
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = images[i]
      li.appendChild(img);
      ul.appendChild(li);
    }
    
  }
//  スライドのイベント
  function moveSlides(){
    ul.style.transform = `translateX(${parseInt(window.getComputedStyle(ul).width) * currentIndex * -1}px`;
  }
// ボタンの移動イベント
  function buttonMove(){
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  createImages();
  buttonControl();
  createButton();
  
  next.addEventListener('click', () => {
    currentIndex++;
    moveSlides();
    buttonControl();
    buttonMove();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    moveSlides();
    buttonControl();
    buttonMove();
  });
  
}