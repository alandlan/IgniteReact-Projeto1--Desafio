import { Header } from './components/Header'
import { FormTask } from './components/FormTask'
import { ListTask } from './components/ListTask'

import styles from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <FormTask />
        <ListTask />
        
      </section>
    </>
  )
}

export default App
