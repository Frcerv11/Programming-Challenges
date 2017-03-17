function minMax(arr){
  var b = [];
  arr.sort((a,b) =>  a-b)
  b.push(arr[0])
  var temp = arr.length - 1
  b.push(arr[temp])
  return b;
}