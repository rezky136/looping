let nilai = [];
let jumlah = 0;

let nilai1 = [80, 85, 90, 95, 100];
for (let i = 0; i < nilai1.length; i++) {
    let hasil = nilai1[i];
    nilai.push(hasil);
    jumlah += hasil;
}
let rataRata = jumlah / nilai1.length;
console.log(`
Nilai : ${nilai.join(', ')}
Jumlah : ${jumlah}
Rata-rata : ${rataRata}
`);