   let x=1160;
   let y=770;
   // let x=225;
   // let y=225;

   let hater = [
      {
         x: 200,
         y : 200
      },
      {
         x : 13,
         y : 13
      },
      {
         x :33,
         y :488,
      },
      {
         x : -13,
         y : 188
      },
      { 
         x : 33,
         y : 48
      },
      {
         x : 101,
         y : 330
      },
      {
      x : 233,
      y : 30
      },
      {
         x : 40,
         y : 148
      },
      {
      x : 633,
      y : 190
      },
      {
         x : 1011,
         y : 330
      },
      {
         x : 933,
         y : 530,
      },
      {
         x : 890,
         y : 748,
      },
      {
      x : 1103,
      y : 690
      },
      {
         x : 160,
         y : 130
      },
      {
         x : 110,
         y : 230
      },
      {
         x : 330,
         y : 130
      }
   ] 


   

  

   let gameSignal = false;

   let canvas;

   function setup() {
      canvas = createCanvas(1200, 800);

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
   
      for(let i = 0; i<hater.length; i++){
   
         stroke(266,0,266);
         strokeWeight(2);
         fill(127);
         ellipse(hater[i].x, hater[i].y, 68, 68);
      }
      
   }

}

// 일정 시간 간격으로 키 상태 확인 후 처리
setInterval(handleKeyState, 100); // 10ms 간격으로 실행
// 방향키 떼었을 때, 타이머 중지



let seconds = 0;
let milliseconds;
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


let speed = [
   {
      xspeed : 5.5,
      yspeed : 5
   },
   {
      xspeed : 24.35,
      yspeed : 21.87
   },
   {
      xspeed :11.35,
      yspeed : 9.87
   },
   {
      xspeed : 13.35,
      yspeed : 11.87
   },
   {
      xspeed : 10.35,
      yspeed : 10.87
   },

]

function impediments(){
   // console.log('width', speed.length)

   for(let i = 0; i<speed.length; i++){
      hater[i].x = hater[i].x + speed[i].xspeed
      hater[i].y = hater[i].y + speed[i].yspeed

      if((hater[i].x > width) || (hater[i].x < 0)){
         speed[i].xspeed = speed[i].xspeed * -1;
      }

      if((hater[i].y > height) || (hater[i].y < 0)){
         speed[i].yspeed = speed[i].yspeed * -1;
      }

   }

}


function arrive(){

   if(x <= 32.4 && y <= 32.8 ){
      alert('도착하였습니다.');
      x = 860;
      y=570;
      gameSignal = false
      
   }
}

function caught(){
   for(let i = 0; i<hater.length; i++){
      if((hater[i].x-30.7 <= x && hater[i].x+30.7 >= x) && (hater[i].y-31.2 <= y && hater[i].y+31.2 >= y)  ){
         // console.log('x2 y2', x2, y2)
         
         alert('잡혔다.');
         x= 860;
         y= 570;
      
         gameSignal = false
         stopStopwatch()
         resetStopwatch()
         // clearInterval(intervalId);
         window.location.reload();
         
      }
   }
}

function startStopwatch() {
   intervalId = setInterval(incrementTimer, 10);
}

let timer = 0;

function incrementTimer() {

  timer += 10;
  const stopwatchElement = document.getElementById('stopwatch');
  stopwatchElement.innerHTML = updateTime(timer);
}

function stopStopwatch() {
   clearInterval(intervalId);
}

function resetStopwatch() {
   clearInterval(intervalId);
   seconds = 0;
   milliseconds = 0;
   // updateTime();
}   

function updateTime(timer) {

   milliseconds = (timer % 1000)/10;


   // if(milliseconds  10)


   let seconds = Math.floor(timer / 1000);
   let minutes = Math.floor(seconds / 60);
   seconds = seconds % 60;
   
   return `${pad(minutes)}:${pad(seconds)}.${milliseconds}`;
}

function pad(number, length = 2) {
   return String(number).padStart(length, "0");
}

document.addEventListener("keyup", startGame, false);

function startGame(e){
   if(e?.key === 'Enter' && gameSignal === false){
      // console.log('eee')
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
