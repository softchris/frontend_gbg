function libadd(a,b){
	return a+b;
}

var Point = (function(){

	function Point(){
		this.x = 11;
	}

	Point.prototype.getX = function(){
		return this.x;
	}

	return Point;
})();

