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
![image](https://github.com/KROLIKjpg/Convert-a-Number-to-a-String/assets/114894776/13ea400f-4b61-4959-a163-6af9561dc917)
