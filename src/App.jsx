
import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Listinput from './components/Listinput';


const App = () => {
  const [todo, setTodo] = useState([])
  // const [entry, setEntry] = useState("")
  // const [title, setTitle] = useState("")

  const insert = (wole) => {
    let wole = { titleOne: title, entryOne: entry }
    let wole2 = [...todo, wole]
    setTodo(wole2)
    // setTitle("")
    // setEntry("")

  }

  const deleteList = (i) => {
    todo.splice(i, 1)
    setTodo([...todo])
  }



  const editList = (w) => {
    let ife = prompt("Enter new title")
    let pelumi = prompt("Enter new body ")
    let ogunba = { title: ife, entry: pelumi }
    setTodo([ogunba])
  }


  return (
    <main className="w-100 d-flex align-items-center justify-content-center flex-column" style={{ height: "100%" }}>
      <Listinput insert={insert} />
      <Display todo={todo} deleteList={deleteList} editList={editList} />
    </main>
  );
}

export default App;
