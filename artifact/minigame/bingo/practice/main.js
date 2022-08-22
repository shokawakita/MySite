'use strict';

{
 
  function createColumn(col){
    // source の配列作成
    const source = [];
    for(let i = 0; i < 15 ; i++){
      source[i] = i + 1 + col * 15
    }

    // source　の配列から重複しないで５つの値を取り出してそれをbの配列とする
    const column = [];
    for(let i = 0; i < 5; i++){
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    return column;
  }

  // columns　の配列作成
  function createColumns(){
    const  columns = [];
    for(let i = 0; i < 5; i++){
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }
  
  // column　の反転(必要ない)
  // function createBingo(){
  //   const bingo = [];
  //   for(let row = 0; row < 5; row++){
  //     bingo[row] = [];
  //     for(let col = 0; col < 5; col++){
  //       bingo[row][col] = columns[col][row]; 
  //     }
  //   }
  // return bingo;
  // }
  
  // htmlへの導入
  function renderColumns(){
    for(let row = 0; row < 5; row++){
      const tr = document.createElement('tr');
      for(let col = 0; col < 5; col++){
        const td = document.createElement('td');
        // td.textContent = bingo[row][col];
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }  
  }
  

  const columns = createColumns();
  renderColumns(columns);
}
