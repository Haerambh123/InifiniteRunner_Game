class obstacle{
	constructor(x,y,v){
		this.x=x;
		this.y=y;
		this.velocity=v;
		this.bob=-1;
	}
	update(frame){
		stroke(2);
		fill(240)
		this.x+=this.velocity;
		if(frame%20==0){
		this.bob=this.bob*-1;
		}
		this.y+=this.bob*random(0.2,1);
		fill(Yellow);
		rect(this.x,this.y,20,20,5);
		if(this.x >= 605){
		this.x=random(-5,-40);
		this.y=random(25,375);
		this.velocity+=0.2;
		}
	}
}
