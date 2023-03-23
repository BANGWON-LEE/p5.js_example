let value = 
[
   {
      x_value : 18,
      y_value : 13
   },
   {
      x_value : 63,
      y_value : 128  
   },
   {
      x_value : 93,
      y_value : 33  
   },
   {
      x_value : 170,
      y_value : 128  
   },
]

// 화면 가까이에 내리는 rain
let nearRain = new Array(7).fill({x:value[0].x_value, y: value[0].y_value });
// 화면 멀리서 내리는 rain
let farRain = new Array(7).fill({x:value[1].x_value, y: value[1].y_value });
let nearRain02 = new Array(7).fill({x:value[2].x_value, y: value[2].y_value });
let farRain02 = new Array(7).fill({x:value[3].x_value, y: value[3].y_value });

let canvas;

function setup() {
   canvas = createCanvas(1200, 600);

}  

function draw() {

      background(220);
      let r =  Math.floor(Math.random() * 5); 
      // point(nearRain[i].x ,nearRain[i].y)
      for(let i = 0; i<nearRain.length; i++){
         // let r = floor(random(5));
      
         // let r = Math.floor(Math.random() * 10) + 1;
         let z = 0;
         z = i*175.7
         // let s = 0;
         // s = r+i;

         stroke(0,0,0);
         strokeWeight(4.3);
         ellipse(nearRain[i].x+z, nearRain[i].y  , 1, 46);
         strokeWeight(1.6);
         ellipse(farRain[i].x+z, farRain[i].y  , 1, 46);
         strokeWeight(4.3);
         ellipse(nearRain02[i].x+z, nearRain02[i].y  , 1, 38);
         strokeWeight(4.3);
         ellipse(nearRain02[i].x+z, nearRain02[i].y  , 1, 38);
         strokeWeight(2.1);
         ellipse(farRain02[i].x+z, farRain02[i].y  , 1, 38);
      }
      impediments();
   
}


let speed = [
   {
      xspeed : 0,
      yspeed : 0.32
   },
   {
      xspeed : 0,
      yspeed : 0.52
   },
]

function impediments(){
// nearRain의 속도 조절 및 위치 초기화

   for(let i = 0; i<nearRain.length; i++){
      let r =  Math.floor(Math.random() * 3); 

      nearRain[i].y = (nearRain[i].y)+speed[0].yspeed
      nearRain02[i].y = (nearRain02[i].y)+speed[0].yspeed
      farRain[i].y = (farRain[i].y)+speed[1].yspeed
      farRain02[i].y = (farRain02[i].y)+speed[1].yspeed

      if((nearRain[i].x > width) || (nearRain[i].x < 0)){
         nearRain[r].x = 18
         nearRain[r].y = 13
      }

      if((nearRain[i].y > height) || (nearRain[i].y < 0)){
         // speed[i].yspeed = speed[i].yspeed * -1;
         nearRain[r].x = value[r].x_value
         nearRain[r].y = value[r].y_value
      }

      if((nearRain02[i].y > height) || (nearRain02[i].y > 300)){
         // speed[i].yspeed = speed[i].yspeed * -1;
         nearRain02[r].x = value[r].x_value
         nearRain02[r].y = value[r].y_value
      }


      if((farRain[i].y > height) || (farRain[i].y > 400)){
         // speed[i].yspeed = speed[i].yspeed * -1;
         farRain[r].x = value[r].x_value
         farRain[r].y = value[r].y_value
      }

      if((farRain02[i].y > height) || (farRain02[i].y > 310)){
         // speed[i].yspeed = speed[i].yspeed * -1;
         farRain02[r].x = value[3].x_value
         farRain02[r].y = value[3].y_value
      }
   }

}
