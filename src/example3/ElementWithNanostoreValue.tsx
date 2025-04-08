import { useStore } from '@nanostores/preact';
import { $store, $value1, $value2 } from './stores';
import { Wrapper } from '../components/wrapper/wrapper';

let counter1 = 0;
export function ElementWithNanostoreValue1() {
  const value1 = useStore($value1);

  counter1 += 1;

  return (
    <Wrapper>
      <p><strong>ElementWithNanostoreValue1</strong></p>
      <p>Value 1: {value1}</p>
      <p>Render count: {counter1}</p>
    </Wrapper>
  );
}

let counter2 = 0;
export function ElementWithNanostoreValue2() {
  const value2 = useStore($value2);

  counter2 += 1;

  return (
    <Wrapper>
      <p><strong>ElementWithNanostoreValue2</strong></p>
      <p>Value 2: {value2}</p>
      <p>Render count: {counter2}</p>
    </Wrapper>
  );
}

let counter3 = 0;
export function ElementWithNanostoreValue3() {
  const { value1 } = useStore($store);

  counter3 += 1;

  return (
    <Wrapper>
      <p><strong>ElementWithNanostoreValue3</strong></p>
      <p>Value 3: {value1}</p>
      <p>Render count: {counter3}</p>
    </Wrapper>
  );
}

let counter4 = 0;
export function ElementWithNanostoreValue4() {
  const { value2 } = useStore($store);

  counter4 += 1;

  return (
    <Wrapper>
      <p><strong>ElementWithNanostoreValue4</strong></p>
      <p>Value 4: {value2}</p>
      <p>Render count: {counter4}</p>
    </Wrapper>
  );
}
