class Sling {
    constructor(body1, point1) {
        var options = {
            bodyA: body1,
            pointB: point1,
            length: 40,
            stiffness: 0.004, 
        }
    this.constraintObj = Constraint.create(options);
    World.add(world, this.constraintObj);
    }

    display() {
        push();

        if(this.constraintObj.bodyA != null) {
            var p1 = this.constraintObj.bodyA.position;
            var p2 = this.constraintObj.pointB;
            stroke("white");
            strokeWeight(4);
            line(p1.x, p1.y, p2.x, p2.y);
        }

        pop();
    }

    fly() {
        this.constraintObj.bodyA = null;
    }

    attach(body) {
        this.constraintObj.bodyA = body;
    }
}