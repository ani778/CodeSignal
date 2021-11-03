function adjacentElementsProduct(inputArray) {
    let len = inputArray.length;
    let p = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < len; i++) {
        if (inputArray[i] * inputArray[i + 1] > p) 
            p = inputArray[i] * inputArray[i + 1];
    }
    return p;
}