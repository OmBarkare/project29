class Hex{
    constructor(x,y,radius,sides){
        var options = {
            'restitution': 0.6,
            'density': 1.5,
            'friction': 1.2 
        }
        this.body = Bodies.circle(x,y,radius,options,sides);
        this.radius = radius;
        this.image = loadImage("images/hexagon.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 70, 60);
    }
}