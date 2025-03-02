import { atom } from 'nanostores';

export const $value1 = atom(0);
export const $value2 = atom(0);

export const updateValue1 = () => $value1.set($value1.get() + 1);
export const updateValue2 = () => $value2.set($value2.get() + 1);
