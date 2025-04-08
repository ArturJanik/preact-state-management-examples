import { createContext } from "preact";
import type { SetStateAction } from "preact/compat";
import { type Dispatch, useContext, useState } from "preact/hooks";
import { Signal, signal } from '@preact/signals';

interface TestContextType {
  value1: number;
  value2: Signal<number>;
  value3: Signal<number>;
  setValue1: Dispatch<SetStateAction<number>>;
  updateValue2: any;
  updateValue3: any;
}

const initialState: TestContextType = {
  value1: 0,
  value2: signal(0),
  value3: signal(0),
  setValue1: () => {},
  updateValue2: () => {},
  updateValue3: () => {},
};

let value2 = initialState.value2;
let value3 = initialState.value3;

const TestContext = createContext(initialState);

const TestContextProvider = ({ children }) => {
  const [value1, setValue1] = useState(initialState.value1);

  const updateValue2 = () => value2.value += 1;
  const updateValue3 = () => value3.value += 1;

  return (
    <TestContext.Provider value={{
      value1,
      value2,
      value3,
      setValue1,
      updateValue2,
      updateValue3,
    }}>
      {children}
    </TestContext.Provider>
  );
};

const useTestContext = () => {
  return useContext(TestContext);
};

export { TestContextProvider, useTestContext };