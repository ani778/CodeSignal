function solution(n) {
    let nStr = '' + n;
     let sum1 = 0;
     let sum2 = 0;
  
     for (let i = 0; i < nStr.length/2; i++) {
         sum1 += parseInt(nStr[i]);
     }
     for (let i =  nStr.length/2; i < nStr.length; i++) {
         sum2 += parseInt(nStr[i]);
     }
  
     if (sum1 != sum2) {
         return false;
     } else {
         return true;
     }
     
 }
 