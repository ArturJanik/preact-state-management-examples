import style from './wrapper.module.css';
import { useFlashOnRerender } from '../../hooks/useFlashOnRerender';

export function Wrapper({ children }) {
  const { ref } = useFlashOnRerender();

  return (
    <section className={style.wrapper} ref={ref}>{children}</section>
  );
}
