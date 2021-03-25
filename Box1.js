class Box1{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.8,
            'friction': 10,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
//

        var r = Math.round(random(1,5))        
        switch(r){
            case 1: fill("blue");
            break;
            case 2: fill("red");
            break;
            case 3: fill("yellow");
            break;
            case 4: fill("lightBlue");
            break;
            case 5: fill("green");
            default:break;
        }
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(0,0);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}