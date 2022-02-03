import React, {  useState,useEffect } from "react";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";


function Todo() {
  let [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [toggle,setToggle]=useState(false)
  const [loading,setLoading]=useState(false)
  const [page,setPage]=useState(1)

//add todo
  const handleAddTodo=()=>{
      fetch("http://localhost:3001/todos",{
          method:"POST",
          body:JSON.stringify({
              title:text,
              id: uuid(),
              status:false
          }),
          headers:{
              "content-Type":"application/json"
          },
      }).then(getTodos)
      .then(()=>{
          setText("")
      })
      .catch((err)=>console.log("err",err))
  }

  const getTodos=()=>{
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=4`)
    .then((d)=>d.json())
    .then(setTodos).then(()=>{
        setLoading(false)
    })
}

//delete todo

const deleteMe = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    }).then(res => {
      getTodos()}).catch((err)=> console.log(err,'delete ni hua'))
  };

useEffect(()=>{
    getTodos(page)
},[page])

  const handleClick = (textComing) => {

    if (todos.length) {
        for (let el of todos) {
          if (el.title === textComing) {
            alert(`Item with name "${textComing}" already exist`);
          }
           else {
            setTodos();
          }
        }
      } else {
            setTodos();
      }
    setText("")
  };


const handleToggle=()=>{
    setToggle(!toggle)
     }


  const addItem = (e) => {
    setText(e.target.value);
  };


  return loading? (<h1>...Loading</h1>):
  (
    <div>
      <TodoInput addItem={addItem} text={text}  handleAddTodo={handleAddTodo}/>
      {todos.map((e) => {
        return (
          <TodoList
          toggle={toggle}
          handleToggle={handleToggle}
          deleteMe={deleteMe}
            key={e.id}
            title={e.title}
            id={e.id}
          />
        );
      })}
 <button disabled={page===1} onClick={()=>{
   setPage(page-1)
   setLoading(true)
 }}>Previous</button>
 <button  onClick={()=>{
   setPage(page+1)
   setLoading(true)
 }}>Next</button>
 <h3 >Page:{page}</h3>
    </div>
  );
}

export default Todo;
