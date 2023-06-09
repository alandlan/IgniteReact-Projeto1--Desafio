
import { Trash } from 'phosphor-react';
import styles from './Task.module.css'
import { useState } from 'react';

interface TaskProps {
    content: string;
    completed: boolean;
    handleRemoveTask: (comment: string) => void;
}

export function Task({ content,completed,handleRemoveTask }: TaskProps) {
    const [isCompleted, setIsCompleted] = useState(completed);
    
    function handleDelete() {
        handleRemoveTask(content);
    }

    function handleDo() {
        setIsCompleted(!isCompleted);
    }

    return (
        <li className={styles.item}>
            <div>
                <div className={styles.checkbox}>
                    <input onChange={handleDo} type="checkbox" checked={isCompleted} />
                </div>          
                <div>
                    {isCompleted ? 
                        <label><s>{content}</s></label> :
                        <label>{content}</label> 
                    }
                    
                </div>
            </div>
            <button onClick={handleDelete} className={styles.buttonRemoveTask}>

                <Trash  className={styles.removeTask} size={24} />
            </button>
        </li>
  )
}