import { ValuesParent } from '../components/valuesparent/ValuesParent';
import { ElementWithNanostoreValue1, ElementWithNanostoreValue2, ElementWithNanostoreValue3, ElementWithNanostoreValue4 } from './ElementWithNanostoreValue';
import { UpdateNanostoreValue1Button, UpdateNanostoreValue2Button, UpdateNanostoreValue3Button, UpdateNanostoreValue4Button } from './UpdateNanostoreButton';

export function Example3() {
  return (
    <div>
      <p>Each element reads single nanostore value</p>
      <ValuesParent>
        <ElementWithNanostoreValue1 />
        <ElementWithNanostoreValue2 />
        <ElementWithNanostoreValue3 />
        <ElementWithNanostoreValue4 />
      </ValuesParent>
      <UpdateNanostoreValue1Button />
      <UpdateNanostoreValue2Button />
      <UpdateNanostoreValue3Button />
      <UpdateNanostoreValue4Button />
    </div>
  );
}