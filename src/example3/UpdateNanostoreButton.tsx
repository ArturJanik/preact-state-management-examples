import { Button } from '../components/button/button';
import { updateValue1, updateValue2 } from './stores';

export function UpdateNanostoreValue1Button() {
  return (
    <Button onClick={() => updateValue1()}>
      Update context value 1
    </Button>
  );
}

export function UpdateNanostoreValue2Button() {
  return (
    <Button onClick={() => updateValue2()}>
      Update nanostore value 2
    </Button>
  );
}
