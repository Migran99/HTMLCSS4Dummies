function snake(posx, posy, size){
	this.posx = posx;
	this.posy = posy;
	this.size = size;
	this.velx = 0;
	this.vely = 0;
	this.length = 1;
	this.tailx = [];
	this.taily = [];
	
	this.dir = function(x,y){
		this.velx = x;
		this.vely = y;
	}
	
	this.draw = function(){
		fill(125);
		rect(this.posx, this.posy, size, size);
	}
	this.move = function(){
		this.posx += this.velx*scl;
		this.posy += this.vely*scl;
		
		this.posx = constrain(this.posx, 0, width-scl);
		this.posy = constrain(this.posy, 0, height-scl);
		
		
		for(var i = this.length; i > 1; i--){
			this.tailx[i-1] = this.tailx[i-2];
			this.taily[i-1] = this.taily[i-2];
		}
		
		this.tailx[0] = this.posx;
		this.taily[0] = this.posy;
		console.log(this.length);
	}
	this.eat = function(f){
		if(this.posx == f.posx && this.posy == f.posy){
			f.eaten = true;
			this.length += 1;
		}
	}
	this.tail = function(){
		fill(200);
		for(var i = 1; i < this.length; i++){
			rect(this.tailx[i], this.taily[i], size, size);
			console.log(this.taily[i]);
		}	
	}
	this.die = function(){
		for(var i = 1; i < this.length; i++){
			if(this.posx == this.tailx[i] && this.posy == this.taily[i]){
				this.velx = 0;
				this.vely = 0;
				this.length = 1;
	}
		}
}
}