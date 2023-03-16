   let x=1160;
   let y=770;
   // let x=225;
   // let y=225;

   let x2 = 200;
   let y2 = 200;

   let x3 = 13;
   let y3 = 13;

   let x4 = 33;
   let y4 = 488;

   let x5 = -13;
   let y5 = 188;

   let x6 = 33;
   let y6 = 48;

   let x7 = 101;
   let y7 = 330;
   
   let x8 = 233;
   let y8 = 30;

   let x9 = 40;
   let y9 = 148;

   let x10 = 633;
   let y10 = 190;

   
   let x11 = 1011;
   let y11 = 330;
   
   let x12 = 933;
   let y12= 530;

   let x13 = 890;
   let y13 = 748;

   let x14 = 1103;
   let y14 = 690;

   let x15 = 160;
   let y15 = 130;

   let x16 = 110;
   let y16 = 230;

   let x17 = 330;
   let y17 = 130;

   let gameSignal = false;

   let canvas;

   function setup() {
      canvas = createCanvas(1200, 800);

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
   }  

let keyState = {};

document.addEventListener('keydown', function(event) {
   keyState[event.keyCode || event.which] = true; // 키 상태 변수에 저장
 });

 // 방향키 뗌 이벤트 리스너 등록
document.addEventListener('keyup', function(event) {
   keyState[event.keyCode || event.which] = false; // 키 상태 변수에서 제거
 });


function draw() {
  
   background(220);
   if(gameSignal === true){
      handleKeyState()
      caught();
      impediments();
      stroke(55);
      strokeWeight(15);
      point(x,y)
      goal();
   
      stroke(266,0,266);
      strokeWeight(2);
      fill(127);
      ellipse(x2, y2, 68, 68);

      stroke(266,0,266);
      strokeWeight(2);
      fill(127);
      ellipse(x3, y3, 68, 68);

      stroke(266,0,266);
      strokeWeight(2);
      fill(127);
      ellipse(x4, y4, 68, 68);

      stroke(266,0,366);
      strokeWeight(2);
      fill(127);
      ellipse(x5, y5, 68, 68);

      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x6, y6, 68, 68);

      
      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x7, y7, 68, 68);

      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x8, y8, 68, 68);

      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x9, y9, 68, 68);

      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x10, y10, 68, 68);

      
      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x11, y11, 68, 68);

      
      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x12, y12, 68, 68);

      
      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x13, y13, 68, 68);

      
      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x14, y14, 68, 68);

      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x15, y15, 68, 68);

      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x16, y16, 68, 68);

      stroke(266,0,166);
      strokeWeight(2);
      fill(127);
      ellipse(x17, y17, 68, 68);
      
   }

}

// 일정 시간 간격으로 키 상태 확인 후 처리
setInterval(handleKeyState, 100); // 10ms 간격으로 실행
// 방향키 떼었을 때, 타이머 중지



let seconds = 0;
let minutes = 0;
let intervalId;

function goal(){
   if(x <= 32.4 && y <= 32.8 ){
      alert('도착');
      stopStopwatch()
      resetStopwatch()
      // clearInterval(intervalId);
      window.location.reload();
      x= 860;
      y= 570;
      return
      
   }
}

xspeed = 5.5;
yspeed = 5;

xspeed3 = 24.35;
yspeed3 = 21.87;

xspeed4 = 11.35;
yspeed4 = 9.87;

xspeed5 = 33.35;
yspeed5 = 11.87;

xspeed6 = 16.35;
yspeed6 = 15.87;

function impediments(){
   x2 = x2 + xspeed;
   y2 = y2 + yspeed;
   x3 = x3 + xspeed3;
   y3 = y3 + yspeed3;
   x4 = x4 + xspeed4;
   y4 = y4 + yspeed4;
   x5 = x5 + xspeed5;
   y5 = y5 + yspeed5;
   x6 = x6 + xspeed6;
   y6 = y6 + yspeed6;

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

    if ((x4 > width) || (x4 < 0)) {
      xspeed4 = xspeed4 * -1;
    }
    if ((y4 > height) || (y4 < 0)) {
      yspeed4 = yspeed4 * -1;
    }

    if ((x5 > width) || (x5 < 0)) {
      xspeed5 = xspeed5 * -1;
    }
    if ((y5 > height) || (y5 < 0)) {
      yspeed5 = yspeed5 * -1;
    }

    if ((x6 > width) || (x6 < 0)) {
      xspeed6 = xspeed6 * -1;
    }
    if ((y6 > height) || (y6 < 0)) {
      yspeed6 = yspeed6 * -1;
    }
}


function lose(){

   if(x <= 32.4 && y <= 32.8 ){
      alert('도착하였습니다.');
      x = 860;
      y=570;
      gameSignal = false
      
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
      x4 = 433;
      y4 = 488;
      x5 = -13;
      y5 = 188;
      x6 = 33;
      y6 = 48;
   
      gameSignal = false
      stopStopwatch()
      resetStopwatch()
      // clearInterval(intervalId);
      window.location.reload();
      
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
      x4 = 433;
      y4 = 488;
      x5 = -13;
      y5 = 188;
      x6 = 33;
      y6 = 48;
   
      gameSignal = false
      stopStopwatch()
      resetStopwatch()
      window.location.reload();
   }
   if((x4-30.7 <= x && x4+30.7 >= x) && (y4-31.2 <= y && y4+31.2 >= y)  ){
      console.log('x2 y2', x2, y2)
      
      alert('잡혔다.');
      x= 860;
      y= 570;
      
      x2 = 200;
      y2 = 200;
      x3 = 350;
      x3 = 350;
      x4 = 433;
      y4 = 488;
      x5 = -13;
      y5 = 188;
      x6 = 33;
      y6 = 48;
   
      gameSignal = false
      stopStopwatch()
      resetStopwatch()
      window.location.reload();
      
   }

   if((x5-30.7 <= x && x5+30.7 >= x) && (y5-31.2 <= y && y5+31.2 >= y)  ){
 
      
      alert('잡혔다.');
      x= 860;
      y= 570;
      
      x2 = 200;
      y2 = 200;
      x3 = 350;
      x3 = 350;
      x4 = 433;
      y4 = 488;
      x5 = -13;
      y5 = 188;
      x6 = 33;
      y6 = 48;
   
      gameSignal = false
      stopStopwatch()
      resetStopwatch()
      window.location.reload();
      
   }

   
   if((x6-30.7 <= x && x6+30.7 >= x) && (y6-31.2 <= y && y6+31.2 >= y)  ){
      console.log('x2 y2', x2, y2)
      
      alert('잡혔다.');
      x= 860;
      y= 570;
      
      x2 = 200;
      y2 = 200;
      x3 = 350;
      x3 = 350;
      x4 = 433;
      y4 = 488;
      x5 = -13;
      y5 = 188;
      x6 = 33;
      y6 = 48;
   
      gameSignal = false
      stopStopwatch()
      resetStopwatch()
      window.location.reload();
      
   }

}

function startStopwatch() {
   intervalId = setInterval(() => {
      seconds++;
      if (seconds === 60) {
         seconds = 0;
         minutes++;
         if (minutes === 60) {
            minutes = 0;
            hours++;
         }
      }
      updateTime();
   }, 1000);
}
function stopStopwatch() {
   clearInterval(intervalId);
}

function resetStopwatch() {
   clearInterval(intervalId);
   seconds = 0;
   minutes = 0;
   hours = 0;
   updateTime();
}   

function updateTime() {
const stopwatchElement = document.getElementById('stopwatch');
stopwatchElement.innerHTML = `${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
return value < 10 ? `0${value}` : value;
}

document.addEventListener("keyup", startGame, false);

function startGame(e){
   if(e?.key === 'Enter' && gameSignal === false){
      console.log('eee')
      // clearInterval(timer);
      startStopwatch()
      gameSignal=true
   }
    
}




 // 연속으로 누른 방향키 처리 함수
function handleKeyState() {
if (keyState[37]) { // 왼쪽 방향키 눌림
   if(x >=5.2 ){
      x-=5.5;
      return;
   }

}
if (keyState[38]) { // 위쪽 방향키 눌림
   if(y >=8 ){
      y-=5.5;
      return;
   }
}
if (keyState[39]) { // 오른쪽 방향키 눌림
   if(x <=1192.7 ){
      x+=5.5;
      return;
   }
}
if (keyState[40]) { // 아래쪽 방향키 눌림
   if(y <=793.2 ){
      y+=5.5;
      return;
   }
}
}

document.addEventListener('keyup', function(event) {
   
});