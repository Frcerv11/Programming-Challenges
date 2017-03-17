function christmasTree(height) {
	var s = "";
	for (var i = 1; i <= height; i++) {
		s +=  " ".repeat(height-i) + "*".repeat(1+((i-1)*2)) +  " ".repeat(height-i);
    	s += i < height ? "\n" : "";
	};
	return s; 
}