import { signal } from '@preact/signals';

let value1 = signal(0);
let value2 = signal(0);

const updateValue1 = (newValue: number) => value1.value = newValue;  
const updateValue2 = (newValue: number) => value2.value = newValue;  

export { value1, value2, updateValue1, updateValue2 };
