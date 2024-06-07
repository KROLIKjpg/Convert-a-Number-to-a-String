function numberToString(num) {
  // Способ 1: Используя метод toString()
  let numString1 = num.toString();
  
  // Способ 2: Используя конструктор String()
  let numString2 = String(num);
  
  // Способ 3: Объединяя число с пустой строкой
  let numString3 = num + "";
  
  // Возвращаем только одно значение, например, первое
  return numString1;
}

// Примеры использования
console.log(numberToString(67)); // "67"
