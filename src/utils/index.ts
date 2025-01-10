export function debouncer(delay: number, cb: Function) {
  let id: ReturnType<typeof setTimeout>;

  return function debounce(value: string) {
    clearTimeout(id);
    id = setTimeout(() => {
      cb(value);
    }, delay);
  };
}
