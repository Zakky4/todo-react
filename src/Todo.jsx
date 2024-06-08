import { useState } from "react";
import "./style.css";

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "TODOです1",
    "TODOです2",
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "TODOでした1",
    "TODOでした2",
  ]);
  return (
    <>
      <div className="input-area">
        <input id="add-text" placeholder="TODOを入力" />
        <button id="add-button">追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-lst">
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul id="complete-lst">
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
