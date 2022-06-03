let ball_x, ball_y, ball_dx, ball_dy, ball_radius, lives,pd_x,pd_y,pd_width,pd_height,pd_dx,pd_dy,score;




function setup() {
  createCanvas(600, 600);
  background('skyblue')
  ball_x= width/2;
  ball_y=height/2;
  score=0;
  lives=3;
  ball_dx=5;
  ball_dy=2;
  ball_radius=20;
  pd_width=100;
  pd_height=20;
  pd_x= (width/2)-(pd_width/2);
  pd_y= height - (pd_height);
}

function draw(){
  background('skyblue');
  textSize(20);
  fill(0, 102, 153);
  text('score:'+ score ,10, 60);
  text('Lives: '+lives, 500, 60);
  stroke('black');
  fill('grey');
  circle(ball_x,ball_y,ball_radius);
  rect(pd_x,pd_y,pd_width,pd_height);
  ball_x=ball_x + ball_dx;
  ball_y = ball_y +ball_dy;
  
      if (ball_x+(ball_radius/2) >= width || ball_x<= 0+(ball_radius/2)){
      ball_dx= -ball_dx;    
  }
  // rect(300,100,500,20);
  // lives=rect.top;

  // rect(170,100,100,20);
  // rect.id("rect2");
  // rect(290,100,100,20);
  // rect.id("rect3");
  // rect4(410,100,100,20);
  // rect4.id("rect4");
  rect(50,140,100,20);
  // rect5.id("rect5");
  rect(170,140,100,20);
  // rect6.id("rect6");
  rect(290,140,100,20);
  // rect7.id("rect7");
  rect(410,140,100,20);
  // rect8.id("rect8");
  rect(50,180,100,20);
  // rect9.id("rect9");
  rect(170,180,100,20);
  // rect10.id("rect10");
  rect(290,180,100,20);
  // rect11.id("rect11");
  rect(410,180,100,20);
  // rect12.id("rect12");

  if(keyIsDown(LEFT_ARROW)){
      if(pd_x>=0){
       pd_x=pd_x-2;
      }
    }
    if(keyIsDown(RIGHT_ARROW)){
      if(pd_x<=600-pd_width){
      pd_x=pd_x+2;
      }
    }
  
    if(ball_y<= 0+(ball_radius/2))
    {
    ball_dy= -ball_dy;
    }
    if(ball_y + ball_radius/2 >pd_y){
      if( pd_x <ball_x +(ball_radius/2)&&ball_x +(ball_radius/2)< pd_x + pd_width ){
        ball_dy =- ball_dy;
      }
      else {
      ball_dx=0;
      ball_dy=0;
        lives-=1;
      }
    }
}
// function game(){
//   for(lives=10;lives>=0;lives--){
    
//   }
// }
