//https://teachablemachine.withgoogle.com/models/n5HARnVMP/
function setup() {
    canvas = createCanvas(600, 400)
    canvas.position(370, 460)
    video = createCapture(VIDEO)
    video.size(600, 400)
    video.hide()

}
function draw(){
    image(video,0,0,600,400)
}