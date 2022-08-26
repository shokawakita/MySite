'use strict';

{
    // 定義
    // menuで使用する定義

    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const menu = document.getElementById('menu-list');

    // Productsで使用する定義
    const itemLists = document.getElementById('item-list');
    const itemLists2 = document.getElementById('item-list2');
    const ul = document.getElementById('selected-page');
    const li = ul.children; 

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

    // Productsのイベント
    // 「１」」を押したときに前ページに戻る機能
    function backEvent() {
        li[0].addEventListener('click', () => {
            itemLists.classList.remove('hidden');
            itemLists2.classList.remove('appear');
            li[0].style.cursor = 'unset';
            li[1].style.cursor = 'pointer';

        });
    }

    // 「2」を押したときに次ページに移動する機能
    function nextEvent() {
        li[1].addEventListener('click', () => {
                itemLists.classList.add('hidden');
                itemLists2.classList.add('appear');
                li[0].style.cursor = 'pointer';
                li[1].style.cursor = 'unset';
        });
    }
    
    // 機能の実装
    nextEvent();
    backEvent();
    openEvent();
    closeEvent();
}