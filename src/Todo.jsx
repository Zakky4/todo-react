import "./style.css";

export const Todo = () => {
  return (
    <>
      <div class="input-area">
        <input id="add-text" placeholder="TODOを入力" />
        <button id="add-button">追加</button>
      </div>
      <div class="incomplete-area">
        <p class="title">未完了のTODO</p>
        <ul id="incomplete-lst">
          <li>
            <div class="list-row">
              <p class="todo-item">TODOです</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">完了したTODO</p>
        <ul id="complete-lst">
          <li>
            <div class="list-row">
              <p class="todo-item">TODOです</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
