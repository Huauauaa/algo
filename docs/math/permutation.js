function arrange(arr, result, count = 0, temp = []) {
  for (const item of arr) {
    if (temp.length === arr.length - 1) {
      if (!temp.includes(item)) {
        count++;
        result.push([...temp, item]);
      }
    }
    if (!temp.includes(item)) {
      arrange(arr, result, count, [...temp, item]);
    }
  }
}

export default function permutation(arr) {
  const result = [];
  arrange(arr, result);
  return result;
}
