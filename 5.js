let baris = [];
let jumlah = 0;
for (let i = 1; i <= 5; i++) {
    baris.push(i);
    jumlah += i;
}
console.log(`${baris.join(' + ')} = ` + jumlah);