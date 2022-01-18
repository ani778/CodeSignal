function solution(picture) {
    let topFrame = '*'.repeat(picture[0].length);
    picture.unshift(topFrame);

    for(let i = 0; i < picture.length; i ++){
        picture[i] = picture[i] + '*'
        picture[i] = '*' + picture[i]
    }
    
    let bottomFrame = '*'.repeat(picture[1].length);
    picture.push(bottomFrame);
    return picture;
    
}
