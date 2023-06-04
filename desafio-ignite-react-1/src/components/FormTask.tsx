import { PlusCircle } from 'phosphor-react';
import styles from './FormTask.module.css';

export function FormTask(){
    return (
        <form  className={styles.formAddTask}>
            <input className={styles.formAddTask__input} type="text" placeholder="Título" />
            <button className={styles.formAddTask__button} type="submit">
                <label>Criar</label>
                <PlusCircle size={22} weight="fill" />
            </button>
        </form>
    )
}