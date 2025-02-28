import React, { useState } from 'react';
import styles from './Counter.module.css';  // Importando os estilos

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);  // Estado inicial do contador é 0

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.counter}>{count}</h2>
      <div className={styles.buttonContainer}>
        <button onClick={increment} className={styles.button}>Incrementar</button>
        <button onClick={decrement} className={styles.button}>Decrementar</button>
      </div>
    </div>
  );
};

export default Counter;
