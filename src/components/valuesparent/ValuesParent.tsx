import style from './valuesparent.module.css';

export function ValuesParent({ children }) {
  return (
    <div className={style.element}>
      {children}
    </div>
  );
}
