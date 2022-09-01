function primeNumber () {
    for (x = 2; x <= 100; x++) {
        if (x % 2 !== 0 && x % 3 !== 0 && x % 5 !== 0 && x % 7 !== 0) {
            console.log('es primo', x);
        }
    }
}

primeNumber();