import { useFlashOnRerender } from '../../hooks/useFlashOnRerender';
import style from './valuesparent.module.css';

let renderCount = 0;

export function ValuesParent({ children }) {
  const { ref } = useFlashOnRerender();

  renderCount += 1;

  return (
    <div className={style.element} ref={ref}>
      {children}
      <p>ValuesParent rerender count: {renderCount}</p>
    </div>
  );
}
