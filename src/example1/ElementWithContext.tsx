import { Wrapper } from '../components/wrapper/wrapper';
import { useTestContext } from './context/TestContext';

let counter1 = 0;
export function ElementWithContextValue1() {
  const { value1 } = useTestContext();

  counter1 += 1;

  return (
    <Wrapper>
      <p><strong>value 1 stored using <q>useState</q> in context</strong></p>
      <p>Value: {value1}</p>
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
      <p><strong>value 2 stored as <q>preact signal</q> in context</strong></p>
      <p>read in JSX as signal object <q>value2</q></p>
      <p>Value: {value2}</p>
      <p>Render count: {counter2}</p>
    </Wrapper>
  );
}

let counter3 = 0;
export function ElementWithContextValue3() {
  const { value3 } = useTestContext();

  counter3 += 1;

  return (
    <Wrapper>
      <p><strong>value 3 stored as <q>preact signal</q> in context</strong></p>
      <p>read in JSX as signal value <q>value3.value</q></p>
      <p>Value: {value3.value}</p>
      <p>Render count: {counter3}</p>
    </Wrapper>
  );
}
