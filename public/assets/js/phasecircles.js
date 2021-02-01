var i = 0; // counter
var j = 0; // same
var t = 0;
var myCanvas;
var gif_now = false;
var rad;
var big_time = 0;
var small_phase = 4;
var big_phase = 32;
var rate = 200;
var clock_status = [0,0,0,0,0];
var clock_pos_fixed = new Array();
var phases = new Array();

var range = 6;
var big_circle = 200;
var star_x = big_circle;
var star_y = big_circle;
var star_red = 255;
var star_green = 255;
var red_phase;
var green_phase;
var yellow_phase;
var big_noise = false;
var num = 2000;
var range_lightning = 40;

var ax = [];
var ay = [];

var simple_this = [[28, ' '], [16, 'e'], [14, 'a'], [12, 's'], [11, 'r'], [11, 't'], [10, 'h'], [10, 'i'], [8, 'g'], [7, 'n'], [6, 'd'], [5, 'o'], [4, 'm'], [3, 'u'], [2, 'T'], [2, 'p'], [2, 'l'], [2, 'w'], [2, 'c'], [2, 'b'], [2, '.'], [1, 'f'], [1, '1'], [1, '4']]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var shuffled_simple_this = shuffle(simple_this);


function draw_circle(center_x,center_y,radius, number_points,first_point,last_point,color,map=false) {
  var a;
  var x; 
  var y;
  textSize(14);
  for (a = first_point; a < last_point; a++) {
    fill(color);
    stroke(0);
    x = center_x + radius * cos(2 * PI * a / number_points);
    y = center_y + radius * sin(2 * PI * a / number_points);
	if (map == false) {
    ellipse(x, y, 10, 10);    
	} else {
		ellipse(x, y, map[a][0]*2, map[a][0]*2);
		fill(0);
		textAlign(CENTER,CENTER);
		text(map[a][1],x,y);
	}
  }

  //console.log(color)
  return {'x':x,'y':y,'green':green(color),'red':red(color) };
}

function check_colors(a,b){
  if ( (a.red == b.red) && (a.green == b.green) ) {
    return true;
  } else {
    return false;
  }
}
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}












                                                                                           
                                                                                           




                                                                                                         
                                                                                                         
//    SSSSSSSSSSSSSSS EEEEEEEEEEEEEEEEEEEEEETTTTTTTTTTTTTTTTTTTTTTTUUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   
//  SS:::::::::::::::SE::::::::::::::::::::ET:::::::::::::::::::::TU::::::U     U::::::UP::::::::::::::::P  
// S:::::SSSSSS::::::SE::::::::::::::::::::ET:::::::::::::::::::::TU::::::U     U::::::UP::::::PPPPPP:::::P 
// S:::::S     SSSSSSSEE::::::EEEEEEEEE::::ET:::::TT:::::::TT:::::TUU:::::U     U:::::UUPP:::::P     P:::::P
// S:::::S              E:::::E       EEEEEETTTTTT  T:::::T  TTTTTT U:::::U     U:::::U   P::::P     P:::::P
// S:::::S              E:::::E                     T:::::T         U:::::D     D:::::U   P::::P     P:::::P
//  S::::SSSS           E::::::EEEEEEEEEE           T:::::T         U:::::D     D:::::U   P::::PPPPPP:::::P 
//   SS::::::SSSSS      E:::::::::::::::E           T:::::T         U:::::D     D:::::U   P:::::::::::::PP  
//     SSS::::::::SS    E:::::::::::::::E           T:::::T         U:::::D     D:::::U   P::::PPPPPPPPP    
//        SSSSSS::::S   E::::::EEEEEEEEEE           T:::::T         U:::::D     D:::::U   P::::P            
//             S:::::S  E:::::E                     T:::::T         U:::::D     D:::::U   P::::P            
//             S:::::S  E:::::E       EEEEEE        T:::::T         U::::::U   U::::::U   P::::P            
// SSSSSSS     S:::::SEE::::::EEEEEEEE:::::E      TT:::::::TT       U:::::::UUU:::::::U PP::::::PP          
// S::::::SSSSSS:::::SE::::::::::::::::::::E      T:::::::::T        UU:::::::::::::UU  P::::::::P          
// S:::::::::::::::SS E::::::::::::::::::::E      T:::::::::T          UU:::::::::UU    P::::::::P          
//  SSSSSSSSSSSSSSS   EEEEEEEEEEEEEEEEEEEEEE      TTTTTTTTTTT            UUUUUUUUU      PPPPPPPPPP          
                                                                                                         
function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('creativeCode');
  frameRate(rate);
  i = 0;
  for (i = 0; i < 5; i++) {
    append(clock_pos_fixed, new Array());
    append(phases,new Array());
  }
  append(clock_pos_fixed[0],new Array(2));
  append(clock_pos_fixed[0],new Array(2));
  append(clock_pos_fixed[0],new Array(2));

  append(clock_pos_fixed[1],new Array(2));
  append(clock_pos_fixed[2],new Array(2));
  append(clock_pos_fixed[3],new Array(2));
  append(clock_pos_fixed[4],new Array(2));

  for ( var i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }

}

























                                                                                                       
                                                                                                       
// DDDDDDDDDDDDD      RRRRRRRRRRRRRRRRR                  AAA   WWWWWWWW                           WWWWWWWW
// D::::::::::::DDD   R::::::::::::::::R                A:::A  W::::::W                           W::::::W
// D:::::::::::::::DD R::::::RRRRRR:::::R              A:::::A W::::::W                           W::::::W
// DDD:::::DDDDD:::::DRR:::::R     R:::::R            A:::::::AW::::::W                           W::::::W
//   D:::::D    D:::::D R::::R     R:::::R           A:::::::::AW:::::W           WWWWW           W:::::W 
//   D:::::D     D:::::DR::::R     R:::::R          A:::::A:::::AW:::::W         W:::::W         W:::::W  
//   D:::::D     D:::::DR::::RRRRRR:::::R          A:::::A A:::::AW:::::W       W:::::::W       W:::::W   
//   D:::::D     D:::::DR:::::::::::::RR          A:::::A   A:::::AW:::::W     W:::::::::W     W:::::W    
//   D:::::D     D:::::DR::::RRRRRR:::::R        A:::::A     A:::::AW:::::W   W:::::W:::::W   W:::::W     
//   D:::::D     D:::::DR::::R     R:::::R      A:::::AAAAAAAAA:::::AW:::::W W:::::W W:::::W W:::::W      
//   D:::::D     D:::::DR::::R     R:::::R     A:::::::::::::::::::::AW:::::W:::::W   W:::::W:::::W       
//   D:::::D    D:::::D R::::R     R:::::R    A:::::AAAAAAAAAAAAA:::::AW:::::::::W     W:::::::::W        
// DDD:::::DDDDD:::::DRR:::::R     R:::::R   A:::::A             A:::::AW:::::::W       W:::::::W         
// D:::::::::::::::DD R::::::R     R:::::R  A:::::A               A:::::AW:::::W         W:::::W          
// D::::::::::::DDD   R::::::R     R:::::R A:::::A                 A:::::AW:::W           W:::W           
// DDDDDDDDDDDDD      RRRRRRRR     RRRRRRRAAAAAAA                   AAAAAAAWWW             WWW            

function draw() {
  textSize(20);
  textAlign(CENTER);
  //fill(255,255,255);
  //stroke(0);
  stroke(1);
  if (big_noise) {
    background(0);
      // Shift all elements 1 place to the left
    for ( var i = 1; i < num; i++ ) {
      ax[i - 1] = ax[i];
      ay[i - 1] = ay[i];
    }

    // Put a new value at the end of the array
    ax[num - 1] += random(-range_lightning, range_lightning);
    ay[num - 1] += random(-range_lightning, range_lightning);

    // Constrain all points to the screen
    ax[num - 1] = constrain(ax[num - 1], 0, width);
    ay[num - 1] = constrain(ay[num - 1], 0, height);

    // Draw a line connecting the points
    for ( var j = 1; j < num; j++ ) {
      var val = j / num * 204.0 + 51;
      stroke(val);
      line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    }
  } else {
    background(255);
  }
  //sum = 0;
  fill(255);
  ellipse(big_circle, big_circle, 210, 210);  
  ellipse(big_circle, big_circle, 190, 190);
  
  
  var left_little = 65;
  fill(255);
  ellipse(left_little, big_circle, 60, 60);  
  fill(255);
  ellipse(left_little, big_circle, 40, 40);
  //draw_circle(left_little,big_circle,25, small_phase,0,small_phase,color(255,0,0,255));
  phases[4] = new Array(draw_circle(left_little,big_circle,25, small_phase,big_time%small_phase,(big_time%small_phase)+1,color(255,255,0,255)));
  fill(0);
  text("4/5",left_little,big_circle);


  var right_little = 335;

  fill(255);
  ellipse(right_little, big_circle, 60, 60);  
  fill(255);
  ellipse(right_little, big_circle, 40, 40);
  //draw_circle(right_little,big_circle,25, small_phase,0,small_phase,color(255,0,0,255));
  phases[2] = new Array(draw_circle(right_little,big_circle,25, small_phase,(big_time%small_phase)+2,(big_time%small_phase)+3,color(255,255,0,255)));
  fill(0);
  text("2/3",right_little,big_circle);

  var top_little = 65;
  fill(255);
  ellipse(big_circle, top_little, 60, 60);  
  fill(255);
  ellipse(big_circle, top_little, 40, 40);
  //draw_circle(big_circle,top_little,25, small_phase,0,small_phase,color(255,0,0,255));
  phases[1] = new Array(draw_circle(big_circle,top_little,25, small_phase,(big_time%small_phase)+1,(big_time%small_phase)+2,color(255,255,0,255)));
  fill(0);
  text("1/2",big_circle,top_little);
  var bottom_little = 335;
  fill(255);
  
  ellipse(big_circle, bottom_little, 60, 60);  
  fill(255);
  ellipse(big_circle, bottom_little, 40, 40);
  //draw_circle(big_circle,bottom_little,25, small_phase,0,small_phase,color(255,0,0,255));
  phases[3] = new Array(draw_circle(big_circle,bottom_little,25, small_phase,(big_time%small_phase)+3,(big_time%small_phase)+4,color(255,255,0,255)));
  fill(0);
  text("3/4",big_circle,bottom_little);
  
  //draw_circle(big_circle,big_circle,100, big_phase,0,big_phase,color(0,255,255,255));
  //draw_circle(center_x,center_y,radius, number_points,first_point,last_point,color)

  fill(0);
  text("0/1",big_circle,big_circle);
  if (clock_status[0] == 0) {
    clock_pos_fixed[0][0][0] = big_time%big_phase;
    clock_pos_fixed[0][0][1] = (big_time%big_phase)+1;
    
    clock_pos_fixed[0][1][0] = (big_time%big_phase)+1;
    clock_pos_fixed[0][1][1]= (big_time%big_phase)+2;

    clock_pos_fixed[0][2][0] = (big_time%big_phase)-1;
    clock_pos_fixed[0][2][1] = (big_time%big_phase);
    
  //draw_circle(big_circle,big_circle,100, big_phase,t%big_phase,(t%big_phase)+1,color(255,255,0,255));
  }
   yellow_phase = draw_circle(big_circle,big_circle,100, big_phase,clock_pos_fixed[0][0][0],clock_pos_fixed[0][0][1],color(255,255,0,255));
   red_phase = draw_circle(big_circle,big_circle,100, big_phase,clock_pos_fixed[0][1][0],clock_pos_fixed[0][1][1],color(255,0,0,255));
   green_phase = draw_circle(big_circle,big_circle,100, big_phase,clock_pos_fixed[0][2][0],clock_pos_fixed[0][2][1],color(0,255,0,255));
  
    phases[0] = [red_phase,yellow_phase,green_phase];
  if ( (star_x - yellow_phase.x) > -10 && (star_x - yellow_phase.x) < 10 && (star_y - yellow_phase.y) > -10 && (star_y - yellow_phase.y) < 10 ) {
      // console.log ( "Noise" );
      // console.log (phases[0]);

      big_noise = true;
      for ( var i = 0; i < num; i++ ) {
        ax[i] = yellow_phase.x;
        ay[i] = yellow_phase.y;
      }
      //ax = [yellow_phase.x];
      //ay = [yellow_phase.y];
    }

  // draw_circle(110,110,50, 9,0,9,color(0,255,255,255));
  // draw_circle(110,110,50, 9,(t%9)+5,(t%9)+6,color(255,0,255,255));

  if (big_noise) {
    
    //var noise = random(0, 255); 
    var noise = 0;//random(0, 255);
    
    yellow_phase = draw_circle(big_circle,big_circle,100, big_phase,clock_pos_fixed[0][0][0],clock_pos_fixed[0][0][1],color(255-noise,255-noise,0,255));
    red_phase = draw_circle(big_circle,big_circle,100, big_phase,clock_pos_fixed[0][1][0],clock_pos_fixed[0][1][1],color(255-noise,0+noise,0,255));
    green_phase = draw_circle(big_circle,big_circle,100, big_phase,clock_pos_fixed[0][2][0],clock_pos_fixed[0][2][1],color(0+noise,255-noise,0,255));
    phases[0] = [red_phase,yellow_phase,green_phase];
    
  }
  
 
  fill(255,0,0,175);
  rect(40,40,120,windowHeight/12);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(17);
  var time = "time is " + big_time;
  

if ( (big_time % 32) == 0) {
  console.log("big time", t, (t-1)%32);
  if (((t-1) % 32) == 0) {
   console.log('2/3');
   if (check_colors(phases[0][1],phases[2][0]) ) {
    console.log("check");
    big_noise = false;
    }
   // } else {
   //  t = t-32;
   //  console.log("not check");
   // }
  }
}
if ((big_time % 32) == 8) {
  if (((t-1) % 32) == 0) {
    console.log('3/4');
    if (check_colors(phases[0][1],phases[3][0]) ) {
    console.log("check");
    big_noise = false;
   }// else {
    //t = t-32;
    //console.log("not check");
  // }
  }
} 
if ((big_time % 32) == 16) {
  if (((t-1) % 32) == 0) {
  console.log('4/5');
  if (check_colors(phases[0][1],phases[4][0]) ) {
    console.log("check");
    big_noise = false;
   } //else {
    //t = t-32;
   // console.log("not check");
  // }
  }
} 
if ((big_time % 32) == 24) {
if (((t-1) % 32) == 0) {
  console.log('1/2');
  if (check_colors(phases[0][1],phases[1][0]) ) {
    console.log("check");
    big_noise = false;
   } //else {
    //t = t-32;
    //console.log("not check");
   //}
  }
} 
  big_time = t / big_phase;
  
  text(time,50,50,(11*windowWidth/12),11*windowHeight/12);
  
  //console.log(t)

  t++;



  star_red += random(-range,range);
  star_green += random(-range,range);
// Constrain all points to the screen
  star_red = constrain(star_red, 0, 255);
  star_green = constrain(star_green, 0, 255);

  fill( color(star_red,star_green,0,255) );
  // Put a new value at the end of the array
  star_x += random(-range, range);
  star_y += random(-range, range);

  // Constrain all points to the screen
  star_x = constrain(star_x, big_circle-105, big_circle+105);
  star_y = constrain(star_y, big_circle-105, big_circle+105);

  star(star_x, star_y, 10, 18, 16);

  fill(color(255,255,255,255))
  rect(500,100,300,300);
  console.log(simple_this);
  var ci = 0;
  var cj = 0;
  for (ci = 0; ci < 2; ci++) {
    for (cj = 0; cj < 2; cj++) {
      //draw_circle(center_x,center_y,radius, number_points,first_point,last_point,color,map=false) {
		draw_circle(650+ci*180,250+cj*180,70, 12,0,12,color(130,233,255),shuffled_simple_this.slice(0,12));
		draw_circle(650+ci*180,250+cj*180,40, 12,0,12,color(130,233,255),shuffled_simple_this.slice(12,24));   } 
  }
  
  
}


// KKKKKKKKK    KKKKKKKEEEEEEEEEEEEEEEEEEEEEEYYYYYYY       YYYYYYYIIIIIIIIII     OOOOOOOOO     
// K:::::::K    K:::::KE::::::::::::::::::::EY:::::Y       Y:::::YI::::::::I   OO:::::::::OO   
// K:::::::K    K:::::KE::::::::::::::::::::EY:::::Y       Y:::::YI::::::::I OO:::::::::::::OO 
// K:::::::K   K::::::KEE::::::EEEEEEEEE::::EY::::::Y     Y::::::YII::::::IIO:::::::OOO:::::::O
// KK::::::K  K:::::KKK  E:::::E       EEEEEEYYY:::::Y   Y:::::YYY  I::::I  O::::::O   O::::::O
//   K:::::K K:::::K     E:::::E                Y:::::Y Y:::::Y     I::::I  O:::::O     O:::::O
//   K::::::K:::::K      E::::::EEEEEEEEEE       Y:::::Y:::::Y      I::::I  O:::::O     O:::::O
//   K:::::::::::K       E:::::::::::::::E        Y:::::::::Y       I::::I  O:::::O     O:::::O
//   K:::::::::::K       E:::::::::::::::E         Y:::::::Y        I::::I  O:::::O     O:::::O
//   K::::::K:::::K      E::::::EEEEEEEEEE          Y:::::Y         I::::I  O:::::O     O:::::O
//   K:::::K K:::::K     E:::::E                    Y:::::Y         I::::I  O:::::O     O:::::O
// KK::::::K  K:::::KKK  E:::::E       EEEEEE       Y:::::Y         I::::I  O::::::O   O::::::O
// K:::::::K   K::::::KEE::::::EEEEEEEE:::::E       Y:::::Y       II::::::IIO:::::::OOO:::::::O
// K:::::::K    K:::::KE::::::::::::::::::::E    YYYY:::::YYYY    I::::::::I OO:::::::::::::OO 
// K:::::::K    K:::::KE::::::::::::::::::::E    Y:::::::::::Y    I::::::::I   OO:::::::::OO   
// KKKKKKKKK    KKKKKKKEEEEEEEEEEEEEEEEEEEEEE    YYYYYYYYYYYYY    IIIIIIIIII     OOOOOOOOO     
function keyPressed() {
  console.log("keyPressed", keyCode);
  
  if (keyCode == 49) {
    myCode = "1";
    if (clock_status[0] == 0) {
      clock_status[0] = 1;
    } else {
      clock_status[0] = 0;
    }
  }
  if (keyCode == 50) {
    myCode = "2";
  } 
  if (keyCode == 51) {
    myCode = "3";
  } 
  if (keyCode == 52) {
    myCode = "4";
  } 
  if (keyCode == 53) {
    myCode = "5";
  }
  if (keyCode == 80) {
    if (rate == 0) {
      rate = 100;
    } else {
      rate = 0;
    }
    frameRate(rate);
  }  

}
 

                                                                                           
                                                                                            