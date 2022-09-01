function detectYearsBicycles(year) {
    let year2 = year;
    while (year2 % 4 !== 0) year2++
    console.log(year2);
    for (i = 0; i < 30; i++) console.log(year2 += 4);
}
detectYearsBicycles(2025)