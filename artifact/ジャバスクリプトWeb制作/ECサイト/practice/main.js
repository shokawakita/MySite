'use strict';

{
  const img = document.querySelectorAll('.sample img');
  let i = 0;

  // 「setInterval」を使用するとループ処理がかぶってしまう可能性があるため「setTimeout」を使用する

  // function currentImgSlide() {
  //   i++;
  //   if(i % 3 === 0) {
  //     img[0].classList.add('current');
  //     img[1].classList.remove('current');
  //     img[2].classList.remove('current');
  //   } else if(i % 3 === 1) {
  //     img[0].classList.remove('current');
  //     img[1].classList.add('current');
  //     img[2].classList.remove('current');
  //   } else {
  //     img[0].classList.remove('current');
  //     img[1].classList.remove('current');
  //     img[2].classList.add('current');
  //   }
  // }

  // function currentImgSlide() {
  //   i++;
  //   img[i % 3 - 1]
  //   img[i % 3]
  //   img[i % 3 + 1]
  // }

  // setInterval(currentImgSlide, 5000);
 
 function play() {
    setTimeout(() => {
      img[i].classList.remove('current');
      i++;
      if(i > img.length - 1){
        i = 0;
      }
      img[i].classList.add('current');
      play();
    }, 5000);
  } 
    
  play();

 }

