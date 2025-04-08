import { atom, map } from 'nanostores';

export const $value1 = atom(0);
export const $value2 = atom(0);
export const $store = map({
  value1: 0,
  value2: 0,
});

export const updateValue1 = () => $value1.set($value1.get() + 1);
export const updateValue2 = () => $value2.set($value2.get() + 1);

export const updateStoreValue1 = () => $store.setKey('value1', $store.get()['value1'] + 1);
export const updateStoreValue2 = () => $store.setKey('value2', $store.get()['value2'] + 1);
