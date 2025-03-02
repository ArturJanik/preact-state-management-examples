import style from './element.module.css';

let counter = 0;

export function ValuesParent({ children }) {
  counter += 1;

  return (
    <div className={style.element}>
      {children}
      <p>ValuesParent render count: {counter}</p>
    </div>
  );
}