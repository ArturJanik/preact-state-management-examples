import { Button } from '../components/button/button';
import { updateStoreValue1, updateStoreValue2, updateValue1, updateValue2 } from './stores';

export function UpdateNanostoreValue1Button() {
  return (
    <Button onClick={() => updateValue1()}>
      Update nanostore value 1
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

export function UpdateNanostoreValue3Button() {
  return (
    <Button onClick={() => updateStoreValue1()}>
      Update nanostore value 3 stored in object
    </Button>
  );
}

export function UpdateNanostoreValue4Button() {
  return (
    <Button onClick={() => updateStoreValue2()}>
      Update nanostore value 4 stored in object
    </Button>
  );
}
