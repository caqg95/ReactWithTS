import React, { ChangeEvent, FormEvent, useState,useRef } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Task } from '../interface/Task';

interface Props{
    newAddTask:(task:Task)=>void
  }
export default function TaskForm({newAddTask}:Props) {
    const initialSate={
        title:'',
        description:''
    };
    const inputTitle=useRef<HTMLInputElement>(null);
    const [task, setTask] = useState(initialSate);
    const handleInputChange = ({
      target: { name, value },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTask({ ...task, [name]: value });
    };

    const handleNewTask=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        newAddTask(task);
        setTask(initialSate);
        inputTitle.current?.focus() ;
    }
    return (
      <div className="card card-body bg-secondary text-dark">
        <h1>Add Task</h1>
        <form onSubmit={handleNewTask}>
          <input
            type="text"
            value={task.title}
            placeholder="Write a Title"
            name="title"
            className="form-control mb-3 rounded-0 shadown-none border-0"
            onChange={handleInputChange}
            autoFocus
            ref={inputTitle}
          ></input>
          <textarea
            name="description"
            value={task.description}
            rows={2}
            placeholder="Description"
            className="form-control mb-3 rounded-0 shadown-none"
            onChange={handleInputChange}
          />
          <button className="btn btn-primary">
            Save
            <AiOutlinePlus />
          </button>
        </form>
      </div>
    );
}
