function createFibonacci() {
    let n1 = 0;
    let n2 = 1;

    for (let i = 0; i <= 50; i++) {
        console.log(n1)

        let fib = n1 + n2
        n1 = n2
        n2 = fib
    }
}

createFibonacci();