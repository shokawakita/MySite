'use strict';

{
  const click = document.getElementById('click');
  click.addEventListener('click', () => {
    const result = ['大吉','中吉','小吉','凶'];
    click.textContent = result[Math.floor(Math.random() * result.length)];
    });

    // ------------------------------------
    // if文を使用したイベント
    // ------------------------------------
    // const result = Math.floor(Math.random() * 4);
    // if(result === 0){
    //   click.textContent = '大吉';
    // } else if(result === 1){
    //   click.textContent = '中吉';
    // } else if(result === 2){
    //   click.textContent = '小吉';
    // } else {
    //   click.textContent = '凶';
    // }
}