import React from 'react';

function TodoInput({handleClick,addItem,text,handleAddTodo}) {


  return <div>
      <input placeholder='Enter Something' value={text} onChange={addItem}/>
      <button disabled={!text} onClick={handleAddTodo}>Add Todo</button>
  </div>;
}

export default TodoInput;

// onClick={()=>handleClick(text)}
