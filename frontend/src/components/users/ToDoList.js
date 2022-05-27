import axios from 'axios'
import {useEffect, useState} from 'react'
import ToDoView from './ToDoView'
import ToDo from './ToDo'

function ToDoList() {

    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios
        .get('http://localhost:4000/todo/all')
        .then(res => {
            console.log(res.data);
            setTodos(res.data);
        })
        .catch(err => {
            console.log(err);
        }
        )
    }, [])


  return (
    <div>
        <ToDo />
        {
            todos.map(todo => (
                <ToDoView key={todo.id} todo={todo} />
            ))
        }
    </div>
  )
}

export default ToDoList

