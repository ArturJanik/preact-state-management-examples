import { createContext } from "preact";
import type { SetStateAction } from "preact/compat";
import { type Dispatch, useContext, useState } from "preact/hooks";
import { signal } from '@preact/signals';

interface TestContextType {
  value1: number;
  value2: number;
  value3: any;
  setValue1: Dispatch<SetStateAction<number>>;
  setValue2: Dispatch<SetStateAction<number>>;
  updateValue3: any;
}

const initialState: TestContextType = {
  value1: 0,
  value2: 0,
  value3: 0,
  setValue1: () => {},
  setValue2: () => {},
  updateValue3: () => {},
};

let value3 = signal(0);
  

const TestContext = createContext(initialState);

const TestContextProvider = ({ children }) => {
  const [value1, setValue1] = useState(initialState.value1);
  const [value2, setValue2] = useState(initialState.value2);

  const updateValue3 = () => value3.value += 1;

  return (
    <TestContext.Provider value={{ value1, value2, value3, setValue1, setValue2, updateValue3 }}>
      {children}
    </TestContext.Provider>
  );
};

const useTestContext = () => {
  return useContext(TestContext);
};

export { TestContextProvider, useTestContext };