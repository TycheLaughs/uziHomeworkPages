/* write an interactive program that will let the
user:
a. sample the color of a pixel pointed to;
b. select a brush shape (e.g., circle or square);
c. assign the sampled color to the brush;
d. free-hand draw with the brush;
e. erase with the brush.*/


var radioColors = document.getElementsByName('fillVal');
var radioStroke = document.getElementsByName('strokeVal');
var radioMode = document.getElementsByName('mode');
var radioBrush = document.getElementsByName('shape');
var canv = document.getElementById("fin08");
var context = canv.getContext("2d");
var weight = 3;

var color = "black";
var weight = 1;
var xPoints = [];
var yPoints = [];
var painting = [];
var lineWeight = [];
xPoints.length = 0;
yPoints.length = 0;
var sampling = 0;
var brush = 0;
var paint = false;
var colorSaver = 'white';
var strokeColorSaver = [];

context.lineWidth = weight;//default line weight
window.onload= function(){

   var palette = document.getElementById('pal');
   context.drawImage(palette, 470, 10);
   
  
};
/*set up palette
context.beginPath();
context.fillStyle="red";
context.strokeStyle="red";
context.arc(490,18,8,0,2*Math.PI);
context.fill();
context.stroke();
context.beginPath();
context.fillStyle="orange";
context.strokeStyle="orange";
context.arc(490,36,8,0,2*Math.PI);
context.fill();
context.stroke();
context.beginPath();
context.fillStyle="yellow";
context.strokeStyle="orange";
context.arc(490,54,8,0,2*Math.PI);
context.fill();
context.stroke();
context.beginPath();
context.fillStyle="green";
context.strokeStyle="green";
context.arc(490,72,8,0,2*Math.PI);
context.fill();
context.stroke();
context.beginPath();
context.strokeStyle="blue";
context.fillStyle="blue";
context.arc(490,90,8,0,2*Math.PI);
context.fill();
context.stroke();
context.beginPath();
context.strokeStyle="purple";
context.fillStyle="purple";
context.arc(490,108,8,0,2*Math.PI);
context.fill();
context.stroke();
context.beginPath();
context.strokeStyle="black";
context.fillStyle="black";
context.arc(490,126,8,0,2*Math.PI);
context.fill();
context.stroke();
context.beginPath();
context.strokeStyle="black";
context.fillStyle="white";
context.arc(490,143,8,0,2*Math.PI);
context.fill();
context.stroke();
/*end palette*/

 /*canv.addEventListener('click', function (e) {
   var mouseX = Number(e.pageX - this.offsetLeft);
   var mouseY = Number(e.pageY - this.offsetTop);

   console.log(mouseX + ", " + mouseY);
   this.interval = 25;

  
   if(sampling){ 
      var imagedata = context.getImageData(0, 0, canv.width, canv.height);
      var data = imagedata.data;  
      var i = ((mouseY * canv.width -3) + mouseX +1) * 4;
      var r = data[i+0];
      var g = data[i+1];
      var b = data[i+2];
      console.log('r'+r +'g'+ g +'b'+ b);
      context.strokeStyle = color; 
      context.beginPath();
      color = 'rgb('+r +','+ g +','+ b+')';
      console.log(color);
      context.fillStyle= color;
      context.strokeStyle= color;
      context.fillRect(478,212,15,15);
      context.fill();
   }
   else{
      saveClick(mouseX, mouseY);
      console.log(xPoints.length);
   }
   //ref for color grabbing: http://stackoverflow.com/questions/6735470/get-pixel-color-from-canvas-on-mouseover
   //http://www.w3schools.com/tags/canvas_getimagedata.asp
   //https://msdn.microsoft.com/en-us/library/ff975056%28v=vs.85%29.aspx
   //https://msdn.microsoft.com/library/jj203843%28v=vs.85%29.aspx
});*/
canv.addEventListener('mousedown', function (e) {
   paint = true;
   var mouseX = Number(e.pageX - this.offsetLeft);
   var mouseY = Number(e.pageY - this.offsetTop);

   console.log(mouseX + ", " + mouseY);
   //this.interval = 25;

  
   if(sampling){ 
      var imagedata = context.getImageData(0, 0, canv.width, canv.height);
      var data = imagedata.data;  
      var i = ((mouseY * canv.width -3) + mouseX +1) * 4;
      var r = data[i+0];
      var g = data[i+1];
      var b = data[i+2];
      console.log('r'+r +'g'+ g +'b'+ b);
      context.strokeStyle = color; 
      context.beginPath();
      color = 'rgb('+r +','+ g +','+ b+')';
      console.log(color);
      context.fillStyle= color;
      context.strokeStyle= color;
      context.fillRect(478,212,15,15);
      context.fill();
      
   }
   else{
      saveClick(mouseX, mouseY);
      console.log(xPoints.length);
      draw();
   }
   var palette = document.getElementById('pal');
   context.drawImage(palette, 470, 10);
});
 
canv.addEventListener('mouseup', function (e) {
   paint = false;
});
  
canv.addEventListener('mousemove', function (e) {
   if(paint == true){
      var mouseX = Number(e.pageX - this.offsetLeft);
      var mouseY = Number(e.pageY - this.offsetTop);
      console.log(mouseX + ", " + mouseY);
      this.interval = 25;
      saveClick(mouseX, mouseY, true);
      console.log(xPoints.length);
      draw();
      var palette = document.getElementById('pal');
      context.drawImage(palette, 470, 10);
   }
   
});

function draw(){
  /* var rectMidX;
   var rectMidY;
   clearCanv();
   //check brush
   if(brush === 1 || brush === 2){//use circular brush
      for(var i = 0; i<xPoints.length; i++){
      //
      context.beginPath();
      context.arc(xPoints[i], yPoints[i], 2, 0, 2*Math.PI);
      context.closePath();
      context.fill();
      
      context.stroke();
      }
   }
   else{//use square brush
     for(var i = 0; i<xPoints.length; i++){
         rectMidX = xPoints[i]-2;
         rectMidY = yPoints[i]+2;
      //need to calculate center of square first
         context.rect(rectMidX, rectMidY, 4, 4);
         context.closePath();
         context.fill();
         context.stroke();
       }
      //the x and y coordinates in the arguments for drawing a rectangle are for the top left corner
      //then offset the thing by half the length of one of the sides
      //-then- use as a brush
   }*/

   if(brush === 1 || brush === 2){//use circular brush
      context.lineJoin = "round";
      context.lineCap="round";
      }
     
   else{//use square brush
      context.lineJoin="miter";
      context.lineCap="square";
   }
      
    for(var i = 0; i<xPoints.length; i++){
    context.beginPath();
      if(painting[i] && i){//if we are still dragging the mouse
         context.moveTo(xPoints[i-1], yPoints[i-1]);
      
      }
    else{//if we lifted the mouse and started again
       context.moveTo(xPoints[i]-1, yPoints[i]);
      }
      context.lineTo(xPoints[i], yPoints[i]);
      context.closePath();
      context.lineWidth = lineWeight[i];
      context.strokeStyle= strokeColorSaver[i];
      context.stroke();
    
   }
   
   
}
function changecolors (){
   color = "black";
   for (var i = 0, length = radioColors.length; i < length; i++) {
      if (radioColors[i].checked) {
         color = radioColors[i].value;
         context.strokeStyle = color; 
     // only one radio can be logically checked, don't check the rest
     //we will need to change this to sample pixels already present
      break;
      }
   }
}; 
function toggleMode(){
   sampling = 0;
   for (var i = 0, length = radioMode.length; i < length; i++) {
      if (radioMode[i].checked) {
         sampling =Number( radioMode[i].value);
     // only one radio can be logically checked, don't check the rest
     //we will need to change this to sample pixels already present
      break;
      }
   }
}; 
var clearCanv = function(){
   context.clearRect(0, 0, canv.width, canv.height);
   
};
var clearCanvAll = function(){
   context.clearRect(0, 0, canv.width, canv.height);
   clearCoords();
   var palette = document.getElementById('pal');
   context.drawImage(palette, 470, 10);
};
var changeweight = function(){
   for (var i = 0, length = radioStroke.length; i < length; i++) {
      if (radioStroke[i].checked) {
         weight = radioStroke[i].value;
         //context.lineWidth = weight;
         //change the value of the variable determining the shape size (circle radius and square dimensions)
         //for square, we also need to do some things in the drawing function to get the cursor to always be centered regardless of size of brush
       break;
      }
   }  
};

function saveClick(x, y, drawing) {
   context.beginPath();
   context.moveTo(x, y);
   context.lineTo(x+1, y);
   context.stroke();
   xPoints.push(x);
   yPoints.push(y);
   painting.push(drawing);
   strokeColorSaver.push(color);
   lineWeight.push(weight);
}
;
function clearCoords() {
    console.log('clearing coordinates and other saved data');
    var i = 0;
    var n = xPoints.length;
    while (i < n) {
        strokeColorSaver.pop();
        xPoints.pop();
        yPoints.pop();
        painting.pop();
        lineWeight.pop();
        i++;
    }
};
function changebrush(){
brush = 0;
//if eraser, save previous color and set color to white
//then next time it's not eraser, if color is still white, set color 
//to previous color. if color is no longer white, do nothing to color
    for (var i = 0, length = radioBrush.length; i < length; i++) {
      if (radioBrush[i].checked) {
         if(radioBrush[i].value=== 'circle'){
            brush = 1;
            if(color == 'white' && colorSaver !='white'){
            //if we were using the eraser but now want to use color, load the old color back
               color = colorSaver;
            }
         }
         else if(radioBrush[i].value=== 'square'){
         
            brush = 0;
            if(color == 'white' && colorSaver != 'white'){
               color = colorSaver;
            }
         }
         else if(radioBrush[i].value=== 'eraseArc'){
            brush = 2;
            colorSaver = color;
            color = 'white';
         }
         else{
            brush = 3;
            colorSaver = color;
            color = 'white';
         }
         //change the value of the variable determining the shape size (circle radius and square dimensions)
         //for square, we also need to do some things in the drawing function to get the cursor to always be centered regardless of size of brush
       break;
      }
   }  
};

var changeweight = function(){
   for (var i = 0, length = radioStroke.length; i < length; i++) {
      if (radioStroke[i].checked) {
         weight = radioStroke[i].value;
         context.lineWidth = weight;
       break;
      }
      
   }
      
};
