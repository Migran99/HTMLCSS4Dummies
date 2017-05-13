function food(size){
	this.size = size;
	this.eaten = false;
	var cols = floor(width / scl);
	var rows = floor(height / scl);
	
	this.pickloc = function(){
		this.posx = scl*floor(random(cols));
		this.posy = scl*floor(random(rows));
	}
	
	this.pickloc();
	
	this.draw = function(){
		if(!this.eaten){
		fill(255,10,10);
		rect(this.posx, this.posy, size, size);	
		}
		else{
			this.pickloc();
			this.eaten = false;
			
		}
		
	}
}