import style from './wrapper.module.css';

export function Wrapper({ children }) {
  return (
    <section className={style.wrapper}>{children}</section>
  );
}
