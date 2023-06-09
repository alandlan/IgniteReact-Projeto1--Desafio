import { Header } from './components/Header'

import styles from './App.module.css'

import { PlusCircle, Trash } from 'phosphor-react'
import { useState } from 'react';

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
                  {newtasks.map((task) => {
                    return (
                      <li key={task.id} className={styles.item}>
                          <div>
                              <div className={styles.checkbox}>
                                  <input onChange={() => {}} type="checkbox" checked={task.completed} />
                              </div>          
                              <div>
                                  <label>{task.description}</label>
                              </div>
                          </div>
                          <div>

                              <Trash size={24} />
                          </div>
                      </li>
                    )
                  })}
                    
                </ul>
            </div>
            
        </section>
        
      </section>
    </>
  )
}

export default App
