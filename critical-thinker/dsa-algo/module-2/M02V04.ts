const range = (start: number, stop: number, step: number) => {
  return Array.from(
    { length: Math.ceil(stop - start) / step },
    // 0 + 0 * 2 = 0
    // 0 + 1 * 2 = 2
    // 0 + 2 * 2 = 4
    (_, i) => (start + i) * step
  );
};

console.log(range(0, 10, 2));
