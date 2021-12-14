function solution(a) {
    let sortedA = [...a].sort((a, b) => a - b).filter((n) => n != -1);
    let sortedIndex = 0;
    for(let i = 0; i < a.length; i++) {
        if (a[i] == -1) continue;
        else {
            a[i] = sortedA[sortedIndex++];
        }
    }
    return a;
}