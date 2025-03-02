import { useTestContext } from './context/TestContext';
import { Button } from '../components/button/button';

export function UpdateContextValue1Button() {
  const { setValue1 } = useTestContext();

  return (
    <Button onClick={() => setValue1((prevValue) => prevValue + 1)}>
      Update context value 1
    </Button>
  );
}

export function UpdateContextValue2Button() {
  const { setValue2 } = useTestContext();

  return (
    <Button onClick={() => setValue2((prevValue) => prevValue + 1)}>
      Update context value 2
    </Button>
  );
}

export function UpdateContextValue3Button() {
  const { updateValue3 } = useTestContext();

  return (
    <Button onClick={updateValue3}>
      Update context value 3
    </Button>
  );
}
