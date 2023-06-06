import { Trash } from 'phosphor-react'
import styles from './ListTask.module.css'

const a = 1;

export function ListTask() {
    return (
        <section className={styles.list}>
            <div className={styles.header}>
                <div>
                    <label>Tarefas criadas</label><span> 5</span>
                </div>
                <div>
                    <label>Concluidas</label><span> 0</span> de <span>5</span>
                </div>
            </div>
            <div className={styles.listItem}>
                <ul>
                    <li className={styles.item}>
                        <div>
                            <div className={styles.checkbox}>
                                <input type="checkbox" />
                            </div>          
                            <div>
                                <label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusamus debitis nulla voluptatibus</label>
                            </div>
                        </div>
                        <div>

                            <Trash size={24} />
                        </div>
                    </li>
                </ul>
            </div>
            
        </section>
    )
}