Array.prototype.numberOfOccurrences = function(target) {
  for(var i =0;i<this.length;i++){
    var x = this.filter(function(b){return b === target}).length
  }
  return x;
}