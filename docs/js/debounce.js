export function debounce(fn, wait) {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
}

export function debounceImmediate(fn, wait) {
  let timer;

  return (...args) => {
    let now = !timer;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      timer = null;
    }, wait);

    if (now) {
      fn(...args);
    }
  };
}
