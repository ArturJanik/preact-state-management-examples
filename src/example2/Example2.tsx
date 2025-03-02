import { ValuesParent } from '../components/valuesparent/ValuesParent';
import { ElementWithSignalValue1, ElementWithSignalValue2 } from './ElementWithSignalValue';
import { UpdateSignalValue1Button, UpdateSignalValue2Button } from './UpdateSignalButton';

export function Example2() {
  return (
    <div>
      <p>Each element reads single signal value</p>
      <ValuesParent>
        <ElementWithSignalValue1 />
        <ElementWithSignalValue2 />
      </ValuesParent>
      <UpdateSignalValue1Button />
      <UpdateSignalValue2Button />
    </div>
  );
}