import styles from './button.module.css';

export function Button({ onClick, children }) {
  return (
    <button class={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}