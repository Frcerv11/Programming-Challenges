var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var number = 0;
    var series = '';
    if(count > 0){
        for(var i=0;i<=count;i++){
            number+=i
            if(i < count){
             series += (i) +'+'
            }
            else{
              series += i +' = ' + number
              return series
            }
        }
    }
    if(count == 0){
      return '0=0';
    }
    if(count < 0){
      return count + '<0'
    }
  }
  return SequenceSum;
})();