for (let i = 1; i <= 5; i++) {
    let baris = '';
    for(let j = 1; j <= 2; j++) {
        let hasil = j * i;
        baris += `${j} x ${i} = ${hasil}\t`;
    }
    console.log(baris);
}