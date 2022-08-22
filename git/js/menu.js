'use strict';

{
  // difinition
  const open = document.getElementById('menu-open');
  const ul = document.querySelector('#menu > nav > ul');

  // menuをクリックしたときにリストを表示機能
  function menuClickEvent(){
    open.addEventListener('click', () => {
        open.classList.toggle('hidden');
        ul.parentElement.parentElement.classList.toggle('appear');
        for(let i = 3; i < 12; i++){
          if(i === 7){continue;}
          ul.children[i].classList.remove('appear');
        }
    });
  }
  
  // menu画面にて、背景をクリックしたときにリストを切り替える
  // ul.parentElement.parentElement.addEventListener('click', () => {
  //   open.classList.remove('hidden');
  //   ul.parentElement.parentElement.classList.remove('appear');
  //   for(let i = 3; i < 12; i++){
  //     if(i === 7){continue;}
  //     ul.children[i].classList.remove('appear');
  //   }
  // });

  // menuのskillsとhobbyをクリックしたときの詳細リストを表示機能
  function menuClickDetail(){
    ul.children[2].addEventListener('click', () => {
      for(let i = 3; i < 7; i++){
        ul.children[i].classList.toggle('appear');
      }
    });
  
    ul.children[7].addEventListener('click', () => {
      for(let i = 8; i < 12; i++){
        ul.children[i].classList.toggle('appear');
      }
    });
  }

  menuClickEvent();
  menuClickDetail();
}