function allLongestStrings(inputArray) {
    let newArray = [];
    
    if (inputArray.length == 1)
        return inputArray;
        
    let longestWord = inputArray.sort(function(a,b) {
        return b.length - a.length;
    });
    let lengthOfLongestWord = longestWord[0].length;
    
    for (let i = 0; i < longestWord.length; i++) {
        if (longestWord[i].length == lengthOfLongestWord) {
            newArray.push(longestWord[i]);
        }
    }
    return newArray;
}
