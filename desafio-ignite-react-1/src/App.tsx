import { FormTask } from './components/FormTask'
import { Header } from './components/Header'

import styles from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <FormTask />

        <p>Olá</p>
      </div>
    </>
  )
}

export default App
