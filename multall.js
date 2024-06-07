function multiplyAll(arr) {
  return function(num) {
    return arr.map(element => element * num);
  };
}