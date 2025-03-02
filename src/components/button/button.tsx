import styles from './button.module.css';

export function Button({ onClick, children, type = 'button', disabled = false }) {
  if (type === 'text') {
    return (
      <div class={styles.button} onClick={onClick}>
        {children}
      </div>
    );
  }
  if (type === 'button') {
    return (
      <button disabled={disabled} class={styles.button} onClick={onClick}>
        {children}
      </button>
    );
  }
}