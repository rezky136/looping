let baris = [];
let jumlah = 0;
for (let i = 1; i <= 5; i+= 2) {
    baris.push(i);
    jumlah += i;
}
console.log(`${baris.join(' + ')} = `+ jumlah);
