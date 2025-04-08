import { TestContextProvider } from './context/TestContext';
import { ValuesParent } from '../components/valuesparent/ValuesParent';
import { ElementWithContextValue1, ElementWithContextValue2, ElementWithContextValue3 } from './ElementWithContext';
import { UpdateContextValue1Button, UpdateContextValue2Button, UpdateContextValue3Button } from './UpdateContextButton';

export function Example1() {
  return (
    <TestContextProvider>
      <p>All elements use same context and read only single unique value from it</p>
      <ValuesParent>
        <ElementWithContextValue1 />
        <ElementWithContextValue2 />
        <ElementWithContextValue3 />
      </ValuesParent>
      <UpdateContextValue1Button />
      <UpdateContextValue2Button />
      <UpdateContextValue3Button />
    </TestContextProvider>
  );
}
