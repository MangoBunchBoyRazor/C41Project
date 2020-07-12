class Drop {
    constructor(x, y) {
        this.initialY = y;
        this.initialX = x;
        this.body = Bodies.circle(x, y, 7);
        World.add(world, this.body);
    }
    show() {
        push();
        fill(255, 0, 255);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipse(0, 0, 7 * 2, 7 * 2);
        pop();
    }
    goBack() {
        Body.setPosition(this.body, { x: this.initialX, y: this.initialY });
        Body.setVelocity(this.body, { x: 0, y: 0 });
    }
}