const Body = Matter.Body;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var drops = [], umbrella, bat, lightning = null, lightFrames = 0;
var lightningImg, batImg;

function preload() {
    lightningImg = loadImage('lightning.png');
    batImg = loadImage('bat.png');
}

function setup() {
    createCanvas(600, 800);

    engine = Engine.create();
    world = engine.world;

    world.gravity.y = 1;

    umbrella = new Umbrella(width / 2, height - 150, 100);

    bat = createSprite(0, height - 400, 50, 50);
    bat.velocity.x = 4;
    bat.addImage(batImg);
}

function draw() {
    background(0);

    push();
    textSize(50);
    textAlign(CENTER);
    fill(50, 50, 255);
    strokeWeight(5);
    stroke(150, 150, 255);
    text("!!--__Batman beginS__--!!", width / 2, 100);
    pop();

    bat.velocity.y = random(-3, 3);
    if (bat.position.x > width)
        bat.velocity.x = -4;
    else if (bat.x < 0)
        bat.velocity.x = 4;

    if (drops.length < 150) {
        let r = floor(random(0, 10));
        switch (r) {
            case 2:
                drops.push(new Drop(random(width), -10));
                break;
            case 5:
                drops.push(new Drop(random(width), -10));
                break;
            case 7:
                drops.push(new Drop(random(width), -10));
                break;
            default:
                break;
        }
    }

    let r = floor(random(30));
    if (r == 5) {
        if (lightning == null)
            lightning = { x: random(width), y: 0 };
    }
    if (lightning !== null) {
        lightFrames++;
        if (lightFrames < 5)
            image(lightningImg, lightning.x, lightning.y, 200, 250);
        else {
            lightFrames = 0;
            lightning = null;
        }
    }

    for (let i = 0; i < drops.length; i++) {
        drops[i].show();
        if (drops[i].body.position.y > height + 50)
            drops[i].goBack();
    }

    umbrella.show();

    Engine.update(engine);
    drawSprites();
}   