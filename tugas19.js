const perulanganKata = (n) => {
    let kata = "Semangat...";
    console.log(kata.repeat(n));
}

const perulanganBintang = (n) => {
    let bintang;

    for (let i = 1; i <= 5; i++) {
        if (i === 1) bintang = "*".repeat(n);
        if (i === 2) bintang = "*".repeat(n + 20);
        if (i === 3) bintang = "*".repeat(n + 40);
        if (i === 4) bintang = "*".repeat(n + 60);
        if (i === 5) bintang = "*".repeat(n + 90);

        console.log(bintang);
    }

    for (let i = 4; i >= 1; i--) {
        if (i === 4) bintang = "*".repeat(n + 60);
        if (i === 3) bintang = "*".repeat(n + 40);
        if (i === 2) bintang = "*".repeat(n + 20);
        if (i === 1) bintang = "*".repeat(n);

        console.log(bintang);
    }
}

perulanganKata(5);
perulanganBintang(5);