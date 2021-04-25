class Ball{
    constructor(x, y, width, height){
        var options={
            isStatic: false,
            density:1,
            frictionAir:0.005
        }
        this.body = Bodies.rectangle(x, y, width, height,  options);
        this.width =this.width;
        this.height = this.height;
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(100);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.width, this.height)
    pop();
}
}