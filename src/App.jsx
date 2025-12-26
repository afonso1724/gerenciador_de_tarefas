import Tasks from "./components/Tasks"
import AddTasks from "./components/AddTasks";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function App(){
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []
);  

useEffect(() => {
localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks]);

useEffect(() => {
  async function fetchTasks(){
     // Buscar dados da API Json Placeholder
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10' , {
    method:'GET'
  });
  const data = await response.json();
  console.log(data)
  
  // Pegar os dados vindos dela


  //Armazenar estes dados no state
  setTasks(data);
  }

  //fetchTasks();
}, [])

// Função para marcar se a tarefa foi concluída ou não, bobioso
function onTasksClick(taskId) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskId){
      return {... task, isCompleted: !task.isCompleted};
    }
    else{
      return task;
    }
  });
  setTasks(newTasks);
}


//Função para apagar uma tarefa da lista, tá bem?
function onDeleteTaskClick(taskId){
  const newTasks = tasks.filter(task => task.id != taskId);
  setTasks(newTasks);

}

//Função para adicionar uma tarefa na lista
function onAddTask (title, description){
  const newTask = {
    id: tasks.length + 1,
    title: title,
    description: description, 
    isCompleted: false,
  };
  setTasks([...tasks, newTask]);

}

return(
  <div class="w-screen h-screen flex justify-center p-6 bg-[radial-gradient(ellipse_at_center,_#dbeafe_0%,_#f8fafc_60%)]">
    <div className="w-[500px] space-y-4">

      <h1 className="text-blue-500 text-3xl text-center font-bold">Gerenciador de Tarefas
      </h1>
    <AddTasks onAddTask={onAddTask}/>
    <Tasks tasks={tasks} onTasksClick={onTasksClick} onDeleteTaskClick={onDeleteTaskClick} />
    <footer className="text-blue-500 text-center">
      <p className="font-bold italic text-center">&copy;DevStar</p>
    </footer>
  </div>
  </div>
  
);
 
}

export default App;
