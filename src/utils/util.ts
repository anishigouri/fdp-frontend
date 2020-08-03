export function changeValue<T>(object: T, key = '', value = ''): T {
  const newObj: T = { ...object, [key]: value };
  return newObj;
}
