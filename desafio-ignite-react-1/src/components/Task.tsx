
import { Trash } from 'phosphor-react';
import styles from './Task.module.css'

interface TaskProps {
    content: string;
    completed: boolean;
    handleRemoveTask: (comment: string) => void;
}

export function Task({ content,completed,handleRemoveTask }: TaskProps) {
    function handleDelete() {
        handleRemoveTask(content);
    }

    return (
        <li className={styles.item}>
            <div>
                <div className={styles.checkbox}>
                    <input onChange={() => {}} type="checkbox" checked={completed} />
                </div>          
                <div>
                    <label>{content}</label>
                </div>
            </div>
            <button onClick={handleDelete}>

                <Trash  className={styles.removeTask} size={24} />
            </button>
        </li>
  )
}