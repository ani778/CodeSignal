function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    let you = [yourLeft, yourRight];
    let friends = [friendsLeft, friendsRight];
    
    you.sort();
    friends.sort();
   for(let i = 0; i < you.length; i++) {
       if (you[i] !== friends[i])
            return false;
   }
   return true;
}
