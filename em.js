function expressionMatter(a, b, c) {
  // Compute all possible expressions and find the maximum
  let max = Math.max(
    a + b + c,
    a * b * c,
    a + (b * c),
    (a + b) * c,
    a * (b + c)
  );

  return max;
}