let baris = [];
let jumlah = 0;
for (let i = 2; i <= 10; i+= 2) {
    baris.push(i);
    jumlah += i;
}
console.log(`${baris.join(' + ')} = `+ jumlah);