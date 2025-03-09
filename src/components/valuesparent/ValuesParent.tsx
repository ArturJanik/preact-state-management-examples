import { useFlashOnRerender } from '../../hooks/useFlashOnRerender';
import style from './valuesparent.module.css';

export function ValuesParent({ children }) {
  const { ref } = useFlashOnRerender();
  let renderCount = 0;

  renderCount += 1;

  return (
    <div className={style.element} ref={ref}>
      {children}
      <p>ValuesParent rerender count: {renderCount}</p>
    </div>
  );
}
