const prompt = require("prompt-sync")({sigint:true});
let n = Number(prompt("Masukkan jumlah perkalian: "));

let header = "*\t";
for (let i = 1; i <= header; i++) {
  header += i + "\t";
}
console.log(header);

for (let i = 1; i <= n; i++) {
  let baris = i + "\t";
  
  for (let j = 1; j <= n; j++) {
    let hasil = i * j;  
    baris += hasil + "\t";
  }
  console.log(baris);
}