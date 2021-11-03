function centuryFromYear(year) {
    let century = 0;
    if (year > 0) {
        year -= 100;
        century += 1;
    }
    return century;
}