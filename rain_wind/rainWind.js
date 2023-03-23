let x_value = 18
let y_value = 13

let value = 
[
   {
      x_value : 18,
      y_value : 13
   },
   {
      x_value : 63,
      y_value : 128  
   }
]

// 화면 가까이에 내리는 rain
let nearRain = new Array(7).fill({x:value[0].x_value, y: value[0].y_value });
// 화면 멀리서 내리는 rain
let farRain = new Array(7).fill({x:value[1].x_value, y: value[1].y_value });

let canvas;

function setup() {
   canvas = createCanvas(1200, 600);

}  

function draw() {

      background(220);
      // point(nearRain[i].x ,nearRain[i].y)
      for(let i = 0; i<nearRain.length; i++){
         // let r = floor(random(5));
         // let r = Math.floor(Math.random() * 10) + 1;
         let z = 0;
         z = i*145.7
         // let s = 0;
         // s = r+i;

         stroke(0,0,0);
         strokeWeight(4.3);
         // fill(1);
         ellipse(nearRain[i].x+z, nearRain[i].y  , 1, 46);
         strokeWeight(1.6);
         ellipse(farRain[i].x+z, farRain[i].y  , 1, 46);
      }
      impediments();
   
}


let speed = [
   {
      xspeed : 0,
      yspeed : 0.27
   },
   {
      xspeed : 0,
      yspeed : 0.47
   },
]

function impediments(){
// nearRain의 속도 조절 및 위치 초기화

   for(let i = 0; i<nearRain.length; i++){
      let r = Math.floor(Math.random());

      nearRain[i].y = (nearRain[i].y)+speed[0].yspeed
      farRain[i].y = (farRain[i].y)+speed[1].yspeed

      console.log('rr',`${nearRain[i]}` + nearRain[i].y)

      if((nearRain[i].x > width) || (nearRain[i].x < 0)){
         nearRain[i].x = 18
         nearRain[i].y = 13
      }

      if((nearRain[i].y > height) || (nearRain[i].y < 0)){
         // speed[i].yspeed = speed[i].yspeed * -1;
         nearRain[i].x = value[0].x_value
         nearRain[i].y = value[0].y_value
      }

      if((farRain[i].y > height) || (farRain[i].y > 500)){
         // speed[i].yspeed = speed[i].yspeed * -1;
         farRain[i].x = value[1].x_value
         farRain[i].y = value[1].y_value
      }
   }

}
