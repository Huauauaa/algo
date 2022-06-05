export function throttle(fn, wait) {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, wait);
    }
  };
}

export function throttleImmediate(fn, wait) {
  let timer;
  return (...args) => {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    }
  };
}

export function throttleDate(fn, wait, immediate = true) {
  let pre = immediate ? 0 : Date.now();
  return (...args) => {
    const now = Date.now();
    if (now - pre > wait) {
      fn(...args);
      pre = now;
    }
  };
}
