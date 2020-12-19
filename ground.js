class Ground {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);

        this.width = width;
        this.height = height;
    }

    display() {
        push();
        rectMode(CENTER);
        var position = this.body.position;
        fill("green");
        rect(position.x, position.y, this.width, this.height);
        pop();
    }
}