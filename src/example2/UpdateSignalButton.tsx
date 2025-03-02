import { Button } from '../components/button/button';
import { updateValue1, updateValue2, value1, value2 } from './signals';

export function UpdateSignalValue1Button() {
  return (
    <Button onClick={() => updateValue1(value1.value + 1)}>
      Update signal value 1
    </Button>
  );
}

export function UpdateSignalValue2Button() {
  return (
    <Button onClick={() => updateValue2(value2.value + 1)}>
      Update signal value 2
    </Button>
  );
}
