import { useState } from "react";
import Input from "./Input";

function AddTask({onAddTaskClick}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleAddTaskClick() {

    if(!title.trim() || !description.trim()){
      return alert("Por favor, preencha todos os campos")
    }

    const task =
    {
      title,
      description,
    }

    onAddTaskClick(task)
    setTitle("")
    setDescription("")
  }

  return <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
    <Input 
    type="text" 
    placeholder="Digite o titulo da tarefa" 
    value={title}
    onChange={(event) => setTitle(event.target.value)} 
    />

    <Input 
    type="text" 
    placeholder="Digite a descrição da tarefa" 
    value={description}
    onChange={(event) => setDescription(event.target.value)} />
  
    <button 
    className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium" 
    onClick={handleAddTaskClick} >Adicionar</button>
  
  </div>;
}

export default AddTask;
