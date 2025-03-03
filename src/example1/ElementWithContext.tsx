import { Wrapper } from '../components/wrapper/wrapper';
import { useTestContext } from './context/TestContext';

let counter1 = 0;
export function ElementWithContextValue1() {
  const { value1 } = useTestContext();

  counter1 += 1;

  return (
    <Wrapper>
      <p><strong>ElementWithContextValue1</strong></p>
      <p>(value stored with <q>useState</q> in context)</p>
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
      <p>(value stored with <q>useState</q> in context)</p>
      <p>Context value 2: {value2}</p>
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
      <p><strong>ElementWithContextValue3</strong></p>
      <p>(value stored as <q>preact signal</q> in context)</p>
      <p>value resolved by preact from signal</p>
      <p>Context value 3: {value3}</p>
      <p>Render count: {counter3}</p>
    </Wrapper>
  );
}

let counter4 = 0;
export function ElementWithContextValue4() {
  const { value4 } = useTestContext();

  counter4 += 1;

  return (
    <Wrapper>
      <p><strong>ElementWithContextValue4</strong></p>
      <p>(value stored as <q>preact signal</q> in context)</p>
      <p>value resolved explicite from signal with <q>.value</q> syntax</p>
      <p>Context value 4: {value4.value}</p>
      <p>Render count: {counter4}</p>
    </Wrapper>
  );
}
