var capitals = function (word) {
	var arr = []
	word = word.split("")
	var word = word.map((letter,index)=>{

		if(letter == letter.toUpperCase())
			arr.push(index)
	});
	return arr
};