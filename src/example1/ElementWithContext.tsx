import { Wrapper } from '../components/wrapper/wrapper';
import { useTestContext } from './context/TestContext';

let counter1 = 0;
export function ElementWithContextValue1() {
  const { value1 } = useTestContext();

  counter1 += 1;

  return (
    <Wrapper>
      <p><strong>ElementWithContextValue1</strong></p>
      <p>Context value 1: {value1}</p>
      <p>Render count: {counter1}</p>
    </Wrapper>
  );
}

let counter2 = 0;
export function ElementWithContextValue2() {
  const { value2 } = useTestContext();

  counter2 += 1;

  return (
    <Wrapper>
      <p><strong>ElementWithContextValue2</strong></p>
      <p>Context value 2: {value2}</p>
      <p>Render count: {counter2}</p>
    </Wrapper>
  );
}
