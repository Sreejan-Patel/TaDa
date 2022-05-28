import axios from 'axios'
import {useEffect, useState} from 'react'
import ToDoView from './ToDoView'
import ToDo from './ToDo'
import Filter from './Filter'

function ToDoList() {

  return (
    <div>
        <ToDo />
        <Filter />
        
        {/* {
            todos.map(todo => (
                <ToDoView key={todo.id} todo={todo} />
            ))
        } */}
    </div>
  )
}

export default ToDoList

