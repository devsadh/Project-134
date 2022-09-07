function back(){
    window.location = "homepage.html"
}

function modelLoaded() {
    console.log("modelLoaded")
    stat = "true"
    objectDetector.detect(img, gotResults)
}

function preload() {
    img = loadImage("sofa.jpg")
}

function draw() {
    image(img, 0, 0, 640, 420)

    if (stat == "true") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Object Detected"

            fill("#FF0000")
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + " " + percent + "% ", objects[i].x, objects[i].y)
            noFill()
            stroke("#FF0000")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        objects = results

    }
}