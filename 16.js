let baris = 5;
for (let i = 1; i <= baris; i++) {
    let baris2 = " ".repeat(baris - i);
    let baris3 = '* '.repeat(i);
    console.log(baris2 + baris3);
}
for (let i = baris - 1; i >= 1; i--) {
    let baris2 = " ".repeat(baris - i);
    let baris3 = '* '.repeat(i);
    console.log(baris2 + baris3);
}