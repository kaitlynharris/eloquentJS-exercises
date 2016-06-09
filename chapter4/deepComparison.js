function deepEqual(a, b) {
  if (typeof a !== "object" || typeof a === null) {
    return a === b;
  }
  if (Object.keys(a).length === Object.keys(b).length) {
    for (var key in a) {
      return deepEqual(a[key], b[key]);
    }
  } else  { return false; }
  return true;
}
