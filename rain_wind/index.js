let x_value = 18
let y_value = 13

let rain = new Array(30).fill({x:x_value, y: y_value });

let canvas;

function setup() {
   canvas = createCanvas(1200, 600);

}  

function draw() {

      background(220);
      // point(rain[i].x ,rain[i].y)
      for(let i = 0; i<rain.length; i++){
         // let r = floor(random(5));
         // let r = Math.floor(Math.random() * 10) + 1;
         let z = 0;
         z = i*39.7
         // let s = 0;
         // s = r+i;

         stroke(0,0,0);
         strokeWeight(2);
         // fill(1);
         ellipse(rain[i].x+z, rain[i].y  , 1, 46);
      }
      impediments();
   
}


let speed = {
   xspeed : 0,
   yspeed : 0.15
}

function impediments(){
// rain의 속도 조절 및 위치 초기화

   for(let i = 0; i<rain.length; i++){
      let r = Math.floor(Math.random());

      rain[i].y = (rain[i].y)+speed.yspeed

      console.log('rr',`${rain[i]}` + rain[i].y)

      if((rain[i].x > width) || (rain[i].x < 0)){
         rain[i].x = 18
         rain[i].y = 13
      }

      if((rain[i].y > height) || (rain[i].y < 0)){
         // speed[i].yspeed = speed[i].yspeed * -1;
         rain[i].x = 18
         rain[i].y = 13
      }
   }

}
