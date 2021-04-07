class bob{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body = Bodies.circle(x,y,radius/2,options);
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        fill("pink");
        ellipse(0,0,40,40);
        pop();
    }
}