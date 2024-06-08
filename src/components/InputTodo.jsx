export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        id="add-text"
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button id="add-button" disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
