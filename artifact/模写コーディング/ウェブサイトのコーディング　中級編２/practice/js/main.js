'use strict';

{
    // 定義
    // menuで使用する定義

    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const menu = document.getElementById('menu-list');

    // menuタブ切り替えのイベント
    // メニュー表示時のイベント
    function openEvent() {
        open.addEventListener('click', () => {
            close.classList.add('appear');
            open.classList.add('hidden');
            menu.parentNode.classList.add('appear');
            menu.lastElementChild.classList.add('appear');
        });
    }

    // メニュー非表示時のイベント
    function closeEvent() {
        close.addEventListener('click', () => {
            close.classList.remove('appear');
            open.classList.remove('hidden');
            menu.parentNode.classList.remove('appear');
            menu.lastElementChild.classList.remove('appear');
        });
    }
    
    // 機能の実装
    openEvent();
    closeEvent();
}