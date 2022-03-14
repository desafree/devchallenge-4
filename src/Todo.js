const Todo = ({todo,index,toggleTodo,removeTodo}) => {
    return ( 
        <div className="todo-container" key={index}>
            {(todo.done)? <input type="checkbox" name="" id="" index={index} defaultChecked onChange={()=>{toggleTodo(index)}}/> : <input type="checkbox" name="" index={index} id="" onChange={()=>{toggleTodo(index)}}/>}
            <p>{todo.name}</p> 
            {(removeTodo)? <button onClick={()=>{removeTodo(index)}}>remove</button> : <></>}
        </div>
     );
}
 
export default Todo;