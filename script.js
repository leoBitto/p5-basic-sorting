let data;

function setup (){
    createCanvas(1000, 300);
    setFrameRate(1);
    data = new Visualsort(30);
    console.log(data);
}
function draw(){
    background(50);
    //data.draw();
    data.insertion();
}

// function mouseClicked(){
//     data.bubble();
// }