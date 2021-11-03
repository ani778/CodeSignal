function makeArrayConsecutive2(statues) {
    let some = 0;
    let rang = statues.sort(function(a,b) {
        return a - b;
    });
    if (rang.length - 1 == 0) {
        return 0;
    } else {
        for (let i = 0; i <= rang - 2; i++) 
            some += rang[i + 1] - rang[i] - 1;
        return some;
    } 
    
}