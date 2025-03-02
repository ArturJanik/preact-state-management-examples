import { ValuesParent } from '../components/valuesparent/ValuesParent';
import { ElementWithNanostoreValue1, ElementWithNanostoreValue2 } from './ElementWithNanostoreValue';
import { UpdateNanostoreValue1Button, UpdateNanostoreValue2Button } from './UpdateNanostoreButton';

export function Example3() {
  return (
    <div>
      <p>Each element reads single nanostore value</p>
      <ValuesParent>
        <ElementWithNanostoreValue1 />
        <ElementWithNanostoreValue2 />
      </ValuesParent>
      <UpdateNanostoreValue1Button />
      <UpdateNanostoreValue2Button />
    </div>
  );
}