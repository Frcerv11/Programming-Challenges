function insertDash(num) {
  var num = num.toString();
  num = num.split("")
  var index = []
  for(var i=0;i<num.length+1;i++){
    aNum = num[i]
    if(i+1 < num.length){
      bNum = num[i+1] 
      if(aNum % 2 === 1 && bNum % 2 === 1){
        index.push(i) 
      }
    }
  }
  var i = index.length
  while(i--){
    num.splice(index[i]+1, 0, "-");
  }
  num = num.toString()
  num = num.replace(/\,/g,"")
  return num
}