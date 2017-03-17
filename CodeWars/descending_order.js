function descendingOrder(n){
	var s = n.toString();
	var arr = s.split("")
	for(var i=0; i<arr.length; i++){
		arr[i] = parseInt(arr[i], 10);
	} 
  	arr.sort((a,b) =>  b-a)
	var finalVal = arr.toString();
	return parseInt(finalVal.replace(/,/g, ''))
}