class Umbrella {
    constructor(x, y, r) {
        this.body = Bodies.circle(x, y, r, { isStatic: true });
        World.add(world, this.body);

        this.radius = r * 2;

        this.image = loadImage('umbrella.png');
    }
    show() {
        push();
        noFill();
        stroke(255);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius * 1.5, this.radius * 1.5);
        pop();
    }
}