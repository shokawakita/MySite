'use strict';

export default function menu() {
  // difinition
  const open = document.getElementById('menu-open');
  const ul = document.querySelector('#menu > nav > ul');

  // menuをクリックしたときにリストを表示機能
  function menuClickEvent(){
    open.addEventListener('click', () => {
        open.classList.toggle('hidden');
        ul.parentElement.parentElement.classList.toggle('appear');
    });
    
    ul.childNodes.forEach(list => {
      list.addEventListener('click', () => {
        open.classList.remove('hidden');
        document.getElementById('menu').classList.remove('appear');
      });
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

  menuClickEvent();
}