   let x=860;
   let y=570;
   // let x=225;
   // let y=225;

   let x2 = 200;
   let y2 = 200;
   let x3 = 313;
   let y3 = 313;

   let canvas;

   function setup() {
      canvas = createCanvas(900, 600);

         console.log('22', point(x,y))
         console.log('x y', x, y)

      const childDiv = createDiv(" goal ");
      
      childDiv.id("child-div");
      canvas.parent("canvas-container");
   
      childDiv.style("background-color", "#FAED7D");
      childDiv.style("width", "50px");
      childDiv.style("position", "absolute");
      childDiv.style("top", "0");
      childDiv.style("font-weight", "bold");
      childDiv.style('text-align', "center");
      childDiv.style('padding', '15px 0')
      childDiv.style('border-radius', '25px')
      // stroke.style('z-index', '99')
      // childDiv.style('z-index', -1)
      
      
      // childDiv.style("background-color", "#f1c40f");
//   childDiv.style("font-size", "24px");
//   childDiv.style("text-align", "center");
   }  

   document.addEventListener("keydown", keyDownHandler, false);
   document.addEventListener("keyup", keyUpHandler, false);

   // 키보드가 눌렸을 때 일어나는 함수 (매개변수: e)
// 각 방향키의 keycode와 방향이 맞다면, 해당 변수들 true 
function keyDownHandler(e) {
   if(e?.key == 37 || e?.key == "ArrowRight") {
      if(x <=892.7 ){
         x+=7.5;
      }
      console.log('x',x)

   }
   else if(e?.key == 39 || e?.key == "ArrowLeft") {
      
      // console.log('x',x)
      if(x >=5.2 ){
         x-=7.5;
      }

   }
   else if(e?.key == 38 || e?.key == "ArrowUp") {
      // y-=7.5;
      if(y >=8 ){
         y-=7.5;
      }
      console.log('y',y)

   }
   else if(e?.key == 40 || e?.key == "ArrowDown") {
 
      if(y <=593.2 ){
         y+=7.5;
      }
      console.log('y',y)

   }
}
 
 
// 키보드가 안 눌렸을 때 일어나는 함수 (매개변수: e)
// 각 방향키의 keycode와 방향이 맞다면, 해당 변수들 false > 초기화
function keyUpHandler(e) {
	if(e?.key == 37 || e?.key == "ArrowRight") {
      // rightPressed = false;
      if(x <=892.7 ){
         x+=7.5;
      }
      console.log('x',x)
      console.log('x2 y2', x2, y2)

      // walker()
   }
   else if(e?.key == 39 || e?.key == "ArrowLeft") {
      // leftPressed = false;
      if(x >=5.2 ){
         x-=7.5;
      }
      console.log('x',x)


   }
   else if(e?.key == 38 || e?.key == "ArrowUp") {
      // upPressed = false;
      if(y >=8 ){
         y-=7.5;
      }
      console.log('3')
      console.log('y',y)
 
   }
   else if(e?.key == 40 || e?.key == "ArrowDown") {
	   // downPressed = false;
      if(y <=593.2 ){
         y+=7.5;
      }
      // y+=7.5;
      console.log('4')
      console.log('y',y)

   }
   
}



function draw() {
  
   background(220);
   caught();
   impediments();
   stroke(55);
   strokeWeight(15);
   point(x,y)
   keyDownHandler();
   keyUpHandler();
   goal();
   


   stroke(266,0,266);
   strokeWeight(2);
   fill(127);
   ellipse(x2, y2, 68, 68);

   stroke(266,0,266);
   strokeWeight(2);
   fill(127);
   ellipse(x3, y3, 68, 68);

   }

function goal(){

   if(x <= 32.4 && y <= 32.8 ){
      alert('도착');
      x = 50;
      y = 50;
      return
      
   }
}

xspeed = 5.5;
yspeed = 5;

xspeed3 = 4.35;
yspeed3 = 2.87;

function impediments(){
   x2 = x2 + xspeed;
   y2 = y2 + yspeed;
   x3 = x3 + xspeed3;
   y3 = y3 + yspeed3;
 
   if ((x2 > width) || (x2 < 0)) {
     xspeed = xspeed * -1;
   }
   if ((y2 > height) || (y2 < 0)) {
     yspeed = yspeed * -1;
   }

   if ((x3 > width) || (x3 < 0)) {
      xspeed3 = xspeed3 * -1;
    }
    if ((y3 > height) || (y3 < 0)) {
      yspeed3 = yspeed3 * -1;
    }
}


function lose(){

   if(x <= 32.4 && y <= 32.8 ){
      alert('도착하였습니다.');
      x = 860;
      y=570;
      return
      
   }
}

function caught(){

   if((x2-30.7 <= x && x2+30.7 >= x) && (y2-31.2 <= y && y2+31.2 >= y)  ){
      console.log('x2 y2', x2, y2)
      
      alert('잡혔다.');
      x= 860;
      y= 570;
      
      x2 = 200;
      y2 = 200;
      x3 = 350;
      x3 = 350;
      
   }
   if((x3-30.7 <= x && x3+30.7 >= x) && (y3-31.2 <= y && y3+31.2 >= y)  ){
      console.log('x2 y2', x2, y2)
      
      alert('잡혔다.');
      x= 860;
      y= 570;
      
      x2 = 200;
      y2 = 200;
      x3 = 350;
      x3 = 350;
   }
}