import { TestContextProvider } from './context/TestContext';
import { ValuesParent } from '../components/valuesparent/ValuesParent';
import { ElementWithContextValue1, ElementWithContextValue2 } from './ElementWithContext';
import { UpdateContextValue1Button, UpdateContextValue2Button } from './UpdateContextButton';

export function Example1() {
  return (
    <TestContextProvider>
      <p>Both elements use same context and read only single unique value from it</p>
      <ValuesParent>
        <ElementWithContextValue1 />
        <ElementWithContextValue2 />
      </ValuesParent>
      <UpdateContextValue1Button />
      <UpdateContextValue2Button />
    </TestContextProvider>
  );
}
