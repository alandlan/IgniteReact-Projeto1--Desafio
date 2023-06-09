import { Header } from './components/Header'

import styles from './App.module.css'

import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import { Task } from './components/Task';

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

function App() {

  const [newtasks, setNewTasks] = useState<Task[]>([]);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const firstField = event.currentTarget[0];
    assertIsFormFieldElement(firstField);
    
    setNewTasks([...newtasks, { id: firstField.value,description: firstField.value,completed:false } as Task]);
  };

  function assertIsFormFieldElement(element: Element): asserts element is HTMLInputElement | HTMLSelectElement | HTMLButtonElement {
    if (!("value" in element)) {
        throw new Error(`Element is not a form field element`);
    }
  }

  function handleRemoveTask(task: string){
    setNewTasks(newtasks.filter(t=>t.id !== task));
  }

  function handleDoTask(task: string){
    const tasks = newtasks.map(t=>{ 
      if(t.id === task){
        t.completed = !t.completed;
      }
      return t;
    })
    setNewTasks(tasks);
  }

  return (
    <>
      <Header />
      <section className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.formAddTask}>
            <input maxLength={100} className={styles.formAddTask__input} type="text" placeholder="Título" />
            <button 
              name='task'
              className={styles.formAddTask__button} 
              type="submit">
                <label>Criar</label>
                <PlusCircle size={22} weight="fill" />
            </button>
        </form>
        <section className={styles.list}>
            <div className={styles.header}>
                <div>
                    <label>Tarefas criadas</label><span> {newtasks.length}</span>
                </div>
                <div>
                    <label>Concluidas</label><span> {newtasks.filter(c=>c.completed).length}</span> de <span>{newtasks.length}</span>
                </div>
            </div>
            <div className={styles.listItem}>
                <ul>
                  {newtasks.map((task) => (
                    <Task
                      key={task.id}
                      content={task.description}
                      completed={task.completed}
                      handleRemoveTask={handleRemoveTask}
                      handleDoTask={handleDoTask} />
                  ))}
                    
                </ul>
            </div>
            
        </section>
        
      </section>
    </>
  )
}

export default App
