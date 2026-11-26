for (let i = 1; i <= 4; i++) {
    let baris = '';
    for(let j = 1; j <= i; j++) {
        baris += '*';
    }
    console.log(baris);
}

console.log("*".repeat(7));

for (let i = 4; i >= 1;i--) {
    let baris = '';
    for(let j = 1; j <= i; j++) {
        baris += '*';
    }
    console.log(baris);
}