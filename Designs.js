class design{
    constructor(x,y,v){
        this.x=x;
        this.y=y;
        this.velocity=v;
    }
    update(){
        noStroke();
        fill(100)
        this.x+=this.velocity+15;
        fill(Black);
        rect(this.x,this.y,10,10);
        if(this.x>=605){
            this.x=-8;
            this.y=random(27,385);
        }
    }
}