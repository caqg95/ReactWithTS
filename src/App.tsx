import {useState} from 'react';
import "bootswatch/dist/yeti/bootstrap.min.css";
import logo from './logo.svg';
import {Task} from './interface/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

interface Props{
  title?:string
}

function App({title}:Props) {
  const [tasks, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Bebe",
      description: "Learn React",
      completed: false,
    },
  ]);
  const getCureentTimestanp=():number=> new Date().getTime();
  const newAddTask=(task:Task)=>{
    setTask(
      [...tasks,
      {
        ...task,
        id:getCureentTimestanp(),
        completed:false
      }]
    );
  }
  const deleteATask=(id:number)=>setTask(tasks.filter(task=>task.id!==id));
  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React Logo" style={{ width: "4rem" }}></img>
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm newAddTask={newAddTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
