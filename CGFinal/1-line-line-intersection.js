/*Write a program that will take two line segments in parametric form as
input, and will return their intersection point, if they intersect. If they don’t, the
program should return an appropriate response. (One parametric form of a line
equation is: p(t) = (1 – t) p1 + t p2. To input the two lines, you will have to input (x, y,
z) coordinates for each one of the two endpoints, p1 and p2 for each one of the lines. If
you prefer, you can input them interactively on the screen*/
//not sure what to do for z, so I just did x and y coords

//using L = p1 + t(p1-p2) , because it makes my head hurt less than the provided version
// Lx = x1 + t(x1-x2)?
// Ly = y1 + t(y1-y2)?



var canv = document.getElementById("fin01");
var context = canv.getContext("2d");
canv.addEventListener('click', function (e) {
   var mouseX = parseInt(e.pageX - this.offsetLeft);
   var mouseY = parseInt(e.pageY - this.offsetTop);
   this.interval = 25;
   //console.log(mouseX + ", " + mouseY);
   getPoints(mouseX, mouseY);
});
//
//values for line 1
var x1=[];
var y1=[];
//values for line 2
var x2=[];
var y2=[];
var intersectIndexY;
var intersectIndexX;
var points=[];
var showPoints='';
var p1x;
var p2x
var p3x;
var p4x;
var p1y;
var p2y
var p3y;
var p4y;


function point(x,y){
   this.x = x;
   this.y = y;
}
point.prototype.coord = function(){
   return '('+ this.x + ','+ this.y+') ';
};



function getPoints(x, y){
   if(points.length <4){
      points.push(new point(x, y));
      context.moveTo(x, y);
      var i = points.length - 1;
      showPoints+= points[i].coord();   
   }
   document.getElementById('inputAdder').innerHTML = showPoints;
   if(i === 3){
      p1x = points[0].x;
      p2x = points[1].x;
      p3x = points[2].x;
      p4x = points[3].x;
      p1y = points[0].y;
      p2y = points[1].y;
      p3y = points[2].y;
      p4y = points[3].y;
      /*for(j = 0; j < points.length; j++){
         console.log(points[j].x + ' ' + points[j].y);
      }*/
      context.moveTo(p1x, p1y);
      context.lineTo(p2x, p2y);
      context.moveTo(p3x, p3y);
      context.lineTo(p4x, p4y);
      context.stroke();
      getLines(p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y);
   }
}

function getLines(p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y){
   //is the change in x larger than the change in y?
   //if not, increment y by 1 and use slope to ingremet x
   //if it is larger, then use the increment-x-by-1 and y-by-slope
   
   var dy1 = Math.abs(p2y-p1y);
   var dx1 = Math.abs(p2x-p1x);
   var dy2 = Math.abs(p4y-p3y);
   var dx2 = Math.abs(p4x-p3x);
   var slope1;
   var slope2;
   if(dx1 > dy1){
      //use increment-x-by-1 method
      slope1 = dy1/dx1;
      for(var i = 1; i <= dx1; i++){
         if(p2x> p1x){
               x1.push(Math.abs(Math.floor(p1x + i)));
            }
            else if(p2x===p1x){
               x1.push(p2x);
            }
            else {
               x1.push(Math.abs(Math.floor(p1x - i)));
            }
         }
         for(var i = 1; i <= dx1; i++){
         if(p2y > p1y){
            y1.push(Math.abs(Math.floor(p1y + (i*slope1))));
            }
         else if(p2x===p1y){
               y1.push(p1y);
         }
         else {
            y1.push(Math.abs(Math.floor(p1y - (i*slope1))));
         }
      }
   }
   else{
      //use increment-y-by-1 method
      slope1 = dx1/dy1;
       for(var i = 1; i <= dy1; i++){
         if(p2x> p1x){
               x1.push(Math.abs(Math.floor(p1x + (i*slope1))));
            }
            else if(p2x===p1x){
               x1.push(p2x);
            }
            else {
               x1.push(Math.abs(Math.floor(p1x - (i*slope1))));
            }
         }
         for(var i = 1; i <= dy1; i++){
         if(p2y > p1y){
            y1.push(Math.abs(Math.floor(p1y + i)));
            }
         else if(p2x===p1y){
               y1.push(p1y);
         }
         else {
            y1.push(Math.abs(Math.floor(p1y - i)));
         }
      }
   }
   if(dx2 > dy2){
      //use increment-x-by-1 method
      slope2 = dy2/dx2;
      for(var i = 1; i <= dx2; i++){
         if(p4x> p3x){
               x2.push(Math.abs(Math.floor(p3x + i)));
            }
            else if(p4x===p3x){
               x2.push(p3x);
            }
            else {
               x2.push(Math.abs(Math.floor(p3x - i)));
            }
         }
         for(var i = 1; i <= dx2; i++){
         if(p4y > p3y){
            y2.push(Math.abs(Math.floor(p3y + (i*slope2))));
            }
         else if(p4x===p3y){
            y2.push(p4y);
         }
         else {
            y2.push(Math.abs(Math.floor(p3y - (i*slope2))));
         }
      }
   }
   else{
      //use increment-y-by-1 method
      slope2 = dx2/dy2;
       for(var i = 1; i <= dy2; i++){
         if(p4x> p3x){
               x2.push(Math.abs(Math.floor(p3x + (i*slope2))));
            }
            else if(p4x===p3x){
               x2.push(p3x);
            }
            else {
               x2.push(Math.abs(Math.floor(p3x - (i*slope2))));
            }
         }
         for(var i = 1; i <= dy2; i++){
         if(p4y > p3y){
            y2.push(Math.abs(Math.floor(p3y + i)));
            }
         else if(p4x===p3y){
               y2.push(p3y);
         }
         else {
            y2.push(Math.abs(Math.floor(p3y - i)));
         }
      }
   }

   console.log(x1);
   console.log(y1);
  
   console.log(x2);
   console.log(y2);
  if(y2.length >= y1.length){
      //compare
      for (var i = 0; i < y2.length; i++){
         intersectIndexY = y1.indexOf(y2[i]);
         //console.log(y2[i]);
         intersectIndexX = x1.indexOf(x2[i]); 

      }
      console.log('indices: ('+x1[intersectIndexX]+','+y1[intersectIndexY]+')');
      console.log(intersectIndexX);
      console.log(intersectIndexY);
      if(intersectIndexX >=0  && intersectIndexY >=0){
      console.log('intersection at ('+x1[intersectIndexX]+','+y1[intersectIndexY]+')');
      showPoints += 'Intersection at ('+x1[intersectIndexX]+','+y1[intersectIndexY]+')';
      
      }
      else{
         console.log('no intersection');
         showPoints += ' No intersection';
      }
  }
  else{//y2.length < y1.length
      for (var i = 0; i < y1.length; i++){
         intersectIndexY = y2.indexOf(y1[i]);
       // console.log(y2[i]);
         intersectIndexX = x2.indexOf(x1[i]); 
         
      }
      console.log(intersectIndexX);
      console.log(intersectIndexY);
      if(intersectIndexX >=0 && intersectIndexY >=0){
      console.log('Intersection at ('+x1[intersectIndexX]+','+y1[intersectIndexY]+')');
      showPoints += 'Intersection at ('+x1[intersectIndexX]+','+y1[intersectIndexY]+')';
      }
      else{
         console.log('no intersection');
         showPoints += ' No intersection';
      }
  }
   document.getElementById('inputAdder').innerHTML = showPoints;
}