import React from 'react';
import ReactDOM from 'react-dom';

// カウンターのコンポーネントを作成する
function Counter(props) {
  return (
    <li style={{backgroundColor:props.counter.color}} onClick={() => props.countUp(props.counter)}>
      {props.counter.id}: {props.counter.count}
      </li>
  )
}

//ループ処理でリストを作成する
function CounterList(props) {
  const counters = props.counters.map(counter => {
    return (
    <Counter
      counter={counter}
      key={counter.id}
      countUp={props.countUp}
      />
    );
  });

  return(
    <ul>{counters}</ul>
  );
}

// classの作成
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      counters: [
        {id: 'A',count: 0, color: 'red'},
        {id: 'B',count: 0, color: 'blue'},
        {id: 'C',count: 0, color: 'yellow'},
        {id: 'D',count: 0, color: 'green'},
      ],
      total: 0
    }
    this.countUp = this.countUp.bind(this)
  }

  // ------------------------------------------------------------
  // カウント機能の作成
  // 目的：
  // ・クリックしたコンポーネントに対して、countの値を1増やす
  // ・totalの値を1増やす
  countUp(counter) {
    // setStateの設定
    // 1.すべてのコンポーネントに対して更新されたときに変更される値の定義を行う
    this.setState(prevState => {
      const counters = prevState.counters.map(counter => {
        return{id: counter.id, count: counter.count, color: counter.color};
      });
  
    
      // 2.クリックした時のコンポーネントを特定するための定義を行い、そのコンポーネントに対して1増やす
      const pos = counters.map(counter => {
        return counter.id;
      }).indexOf(counter.id);
      counters[pos].count++;

      // 3.値の更新を行ったものをsetStateに代入する
      return {
        counters: counters,
        total: prevState.total + 1
      };
    });
  }

  // カウント機能の作成ここまで
  // ------------------------------------------------------------

  // jsx
  render() {
    return (
      <div className="container">
        <CounterList
          counters={this.state.counters}
          countUp={this.countUp}
        />
        <div>TOTAL INVENTORY: {this.state.total}</div>  
      </div>
    );
  }
}

// AppクラスをHTMLに変換
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
