import style from './title.module.css';

export function Title({ children }) {
  return (
    <div className={style.title}>{children}</div>
  );
}
