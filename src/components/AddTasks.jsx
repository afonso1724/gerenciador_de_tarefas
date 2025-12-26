import { useState } from "react";

function AddTasks({onAddTask}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
   return(
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

    <input className="border-slate-300 rounded-md outline-blue-500 px-4 py-2" type="text" placeholder="Digite aqui o título da sua tarefa:" 
    value={title}
    onChange={(event) => setTitle(event.target.value)}
    />

    <input className="border-slate-300 rounded-md outline-blue-500 px-4 py-2" type="text" placeholder="Digite aqui a descrição da sua tarefa:"
    value={description}
     onChange={(event) => setDescription(event.target.value)}
    />

    <button onClick={() => {

        // verificar se há inputs em branco
        if (!title.trim() || !description.trim()){
            return alert("Preencha o título e a descrição para poder adicionar a sua tarefa")
        } 
        onAddTask (title, description);
        setTitle("");
        setDescription("");
    }} 
    className="bg-blue-500 p-2 text-white rounded-md px-4 py-2 font-bold">
        Adicionar
        </button>
   </div>
   );
}

export default AddTasks;