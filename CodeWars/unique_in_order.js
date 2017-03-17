var uniqueInOrder = function(iterable){
    var arr = []
    arr.push(iterable[0])
    if(iterable.length==0) 
      return [];
    if(typeof iterable === 'string') 
    	iterable = iterable.split('');
    iterable.reduce(function(prevNum,num){
        if(prevNum !== num)
          arr.push(num)
        return num;
    });
    return arr;
}