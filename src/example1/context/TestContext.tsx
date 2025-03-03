import { createContext } from "preact";
import type { SetStateAction } from "preact/compat";
import { type Dispatch, useContext, useState } from "preact/hooks";
import { Signal, signal } from '@preact/signals';

interface TestContextType {
  value1: number;
  value2: number;
  value3: Signal<number>;
  value4: Signal<number>;
  setValue1: Dispatch<SetStateAction<number>>;
  setValue2: Dispatch<SetStateAction<number>>;
  updateValue3: any;
  updateValue4: any;
}

const initialState: TestContextType = {
  value1: 0,
  value2: 0,
  value3: signal(0),
  value4: signal(0),
  setValue1: () => {},
  setValue2: () => {},
  updateValue3: () => {},
  updateValue4: () => {},
};

let value3 = initialState.value3;
let value4 = initialState.value4;

const TestContext = createContext(initialState);

const TestContextProvider = ({ children }) => {
  const [value1, setValue1] = useState(initialState.value1);
  const [value2, setValue2] = useState(initialState.value2);

  const updateValue3 = () => value3.value += 1;
  const updateValue4 = () => value4.value += 1;

  return (
    <TestContext.Provider value={{
      value1,
      value2,
      value3,
      value4,
      setValue1,
      setValue2,
      updateValue3,
      updateValue4,
    }}>
      {children}
    </TestContext.Provider>
  );
};

const useTestContext = () => {
  return useContext(TestContext);
};

export { TestContextProvider, useTestContext };