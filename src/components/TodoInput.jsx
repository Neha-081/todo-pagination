import React from 'react';
import '../App.css'

function TodoInput({handleClick,addItem,text,handleAddTodo}) {


  return <div>
  <div className="form-group">
    <h1 >ENTER TODOS</h1>
    <input className="form-control" id="exampleInputEmail1" placeholder='Enter Something' value={text} onChange={addItem}/>
  </div>
      <button className="btn btn-success" disabled={!text} onClick={handleAddTodo}>Add Todo</button>

  </div>;
}

export default TodoInput;

// onClick={()=>handleClick(text)}
