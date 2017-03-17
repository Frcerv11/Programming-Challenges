Array.prototype.all = function (p) {
if(this.length == 0){
		return true;
	}
for(var i=0;i<this.length;i++){
		if(p(this[i]) === false){
			break;
		}
		else
			return true;
		
	}
  return false;
};

Array.prototype.none = function (p) {
if(this.length == 0){
		return true;
	}
  	for(var i=0;i<this.length;i++){
	  	if(p(this[i]) === true){
	  		break;
	  	}
	  	else
	  		return true;
	  }
  return false;
};

Array.prototype.any = function (p) {

  for (var i = 0; i < this.length; i++) {
  	if(p(this[i]) == true){
  		return true;
  	}
  };
  return false;
};