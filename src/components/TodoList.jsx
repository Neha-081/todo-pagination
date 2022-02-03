import React from 'react';

function TodoList({title,status,id,handleDelete,handleToggle,toggle,deleteMe}) {
  return <div>
      <h1>{title}-{toggle?'done':'not done'}</h1>
      <button onClick={()=>{
          deleteMe(id)
      }}>Delete</button>
      <button onClick={handleToggle}>Toggle</button>
      
  </div>;
}

export default TodoList;
