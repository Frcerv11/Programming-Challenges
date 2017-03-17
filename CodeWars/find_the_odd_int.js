function findOdd(A) {
 for(var i=0;i<A.length;i++){
     // Itterating through input array. If occurence is an odd number 
     // store in target. Else null 
  	((A.filter(a => a === A[i]).length) % 2 == 1) ? target = A[i] : null
  }
  return target;
}