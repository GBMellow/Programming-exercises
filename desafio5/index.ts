function reverseString(str: string): string {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const original = "Desenvolvedor";
console.log(`Original: ${original}`);
console.log(`Invertido: ${reverseString(original)}`);
