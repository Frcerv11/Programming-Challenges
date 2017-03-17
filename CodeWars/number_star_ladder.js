String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, "");
};
function pattern(n){
	var output="";
	for(var i=1;i<n+1;i++){
		output += 1 + '*'.repeat(i-1) + ((i>1) ? i + '\n': '\n')
	}
	output = output.trim();
	return output;
}