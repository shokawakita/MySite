// 【今回のテーマ】

// 一定時間経過ごとに、

// ・画像が切り替わるイベントを再生する
// ・すべての画像が再生されたらリピートする

// イベントをつける

// 【目標時間】

// １時間

// 【実際に掛かった時間】

// ３５分
'use strict';

{
  const imgs = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  // 自分で作ったイベント
  // function slideMove(){
  //   currentIndex++;
  //   imgs.forEach((img, index) => {
  //     if(currentIndex === imgs.length) {
  //       currentIndex = 0;
  //     }
  //     if(index === currentIndex) {
  //       img.classList.add('current');
  //     } else {
  //       img.classList.remove('current');
  //     }
  //   });
  //   setTimeout(slideMove,1000);
  // }

  // setTimeout(slideMove,1000);


  function play(){
    setTimeout(() => {
      imgs[currentIndex].classList.remove('current');
      currentIndex++;
      if(currentIndex > imgs.length - 1) {
        currentIndex = 0;
      }
      imgs[currentIndex].classList.add('current');
      play();
    }, 1000)
  }

  play();
  // function timeEvent(){
    
  //   const timeoutID = setTimeout({
  //     imgs.forEach((img, el) => {
  //       currentIndex++;
  //       if(el === currentIndex){
  //         img.classList.add('current');
  //       } else {
  //         img.classList.remove('current');
  //       }
  //     })
  //   },1000);
  // }

  // timeEvent();
}