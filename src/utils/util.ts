export function changeValue<T>(model: T, key: string, value: string): T {
  // @ts-ignore
  const newObj: T = { ...model, [key]: { ...model[key], value } };
  return newObj;
}
