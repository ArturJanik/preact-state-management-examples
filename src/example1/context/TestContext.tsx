import { createContext } from "preact";
import type { SetStateAction } from "preact/compat";
import { type Dispatch, useContext, useState } from "preact/hooks";

interface TestContextType {
  value1: number;
  value2: number;
  setValue1: Dispatch<SetStateAction<number>>;
  setValue2: Dispatch<SetStateAction<number>>;
}

const initialState: TestContextType = {
  value1: 0,
  value2: 0,
  setValue1: () => {},
  setValue2: () => {},
};

const TestContext = createContext(initialState);

const TestContextProvider = ({ children }) => {
  const [value1, setValue1] = useState(initialState.value1);
  const [value2, setValue2] = useState(initialState.value2);

  return (
    <TestContext.Provider value={{ value1, value2, setValue1, setValue2 }}>
      {children}
    </TestContext.Provider>
  );
};

const useTestContext = () => {
  return useContext(TestContext);
};

export { TestContextProvider, useTestContext };