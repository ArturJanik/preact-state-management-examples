import { Button } from '../components/button/button';
import { Wrapper } from '../components/wrapper/wrapper';
import { value1, value2 } from './signals';

let counter1 = 0;
export function ElementWithSignalValue1() {
  counter1 += 1;

  return (
    <Wrapper>
      <p><strong>ElementWithSignalValue1</strong></p>
      <p>Signal value 1: {value1}</p>
      <p>Render count: {counter1}</p>
    </Wrapper>
  );
}

let counter2 = 0;
export function ElementWithSignalValue2() {
  counter2 += 1;

  const changeValueFromElementLevel = () => value2.value += 2;

  return (
    <Wrapper>
      <p><strong>ElementWithSignalValue2</strong></p>
      <p>Signal value 2: {value2}</p>
      <p>Render count: {counter2}</p>
      <Button onClick={changeValueFromElementLevel}>Add +2 to signal value by mutating it from within component reading it</Button>
    </Wrapper>
  );
}
