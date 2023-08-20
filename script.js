function decimalToBinary(num) {
  //Write you code here
   return num.toString(2);
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
window.decimalToBinary = decimalToBinary;
