function BinarioADecimal(num) {
  // tu codigo aca
let array = num.split("").reverse().map(Number);
let x = 0;
let result = 0;
for (i = 0; i < array.length; i++) {
  x = array[i] * Math.pow(2, i);
  result = result + x;
}
return result;
}

function DecimalABinario(num) {
  // tu codigo aca
var binario = "";
var x = num;
while (x > 0){
  if (x % 2 === 0){
    binario = "0" + binario;
  }
  else {
    binario = "1" + binario;
  }
  x = Math.floor (x / 2);
}
return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
