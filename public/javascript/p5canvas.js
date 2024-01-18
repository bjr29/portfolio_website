const floatingPoints = [];
const maxSpeed = 0.1;
const lineWidth = 3;
const lineAlpha = 20;

let totalFloatingPoints = 50;

// noinspection JSUnusedGlobalSymbols
function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("#landing-section");

    totalFloatingPoints = width / 30;

    for (let i = 0; i < totalFloatingPoints; i++) {
        floatingPoints.push({
            position: createVector(random(width), random(height)),
            velocity: createVector(random(-maxSpeed, maxSpeed), random(-maxSpeed, maxSpeed))
        });
    }

    frameRate(60);
}

// noinspection JSUnusedGlobalSymbols
function draw() {
    background(document.body.style.backgroundColor);

    for (let i = 0; i < totalFloatingPoints; i++) {
        let floatingPoint = floatingPoints[i];
        floatingPoint.position.add(floatingPoint.velocity);

        if (floatingPoint.position.x > width) floatingPoint.position.x = 0;
        else if (floatingPoint.position.x < 0) floatingPoint.position.x = width;
        else if (floatingPoint.position.y > height) floatingPoint.position.y = 0;
        else if (floatingPoint.position.y < 0) floatingPoint.position.y = height;

        stroke(0, lineAlpha);
        strokeWeight(lineWidth);
        point(floatingPoint.position.x, floatingPoint.position.y);
    }

    for (let i = 0; i < totalFloatingPoints; i++) {
        let floatingPoint = floatingPoints[i];

        for (let j = i + 1; j < totalFloatingPoints; j++) {
            let otherFloatingPoint = floatingPoints[j];

            stroke(0, min(200 - floatingPoint.position.dist(otherFloatingPoint.position), lineAlpha));
            strokeWeight(lineWidth);
            line(floatingPoint.position.x, floatingPoint.position.y, otherFloatingPoint.position.x, otherFloatingPoint.position.y);
        }
    }
}