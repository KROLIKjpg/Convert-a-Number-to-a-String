function numberToString(num) {
  // ������ 1: ��������� ����� toString()
  let numString1 = num.toString();
  
  // ������ 2: ��������� ����������� String()
  let numString2 = String(num);
  
  // ������ 3: ��������� ����� � ������ �������
  let numString3 = num + "";
  
  // ���������� ������ ���� ��������, ��������, ������
  return numString1;
}

// ������� �������������
console.log(numberToString(67)); // "67"