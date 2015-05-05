/*When a circle is represented by its inscribed polygon, a tolerance e is
defined as the maximum perpendicular distance from the arc to the chord between
two points on the circumference of the circle. Derive the relationship between the
number of points n, the radius r of the circle, and the tolerance e. (See example in
figure.) Write a program that will take as inputs the number n and the radius r and
will draw an n-sided polygon approximation to a circle of that radius, and the circle.
The program should report the tolerance e. Get extra 10 points for implementing an
interactive slider to input n and get direct manipulation of the polygon.*/

//get input
//number n and the radius r
//draw an n-sided polygon approximation to a circle of that radius, and the circle.
//The program should report the tolerance e.
//extra: implement a slider for n values

var canv = document.getElementById("fin08");
var context = canv.getContext("2d");
var color = "black";
var weight = 3;
var radius=200;
var n;
var e;

function getRadius(){
   r = Number(document.forms.namedItem('getInput').R.value);
   if(r && n){
      draw();
   }
}

function getNvalue(){
   var show = document.getElementById('printN');
   n = Number(document.forms.namedItem('getInput').nSlider.value);
   show.innerHTML = n;
   if(r && n){
      draw();
   }
}
function draw(){
   clearCanv();
   //context.beginPath();
   //context.arc(250, 250, r, 0, 2*Math.PI);
   //context.stroke();
   for (var i = 0; i < n; i++){
      context.beginPath();
     
      context.arc(250, 250, r, ((((2)*Math.PI)/n) + i*(((2)*Math.PI)/n)), ((((2)*Math.PI)/n) + ((2*Math.PI)/(n)) + i*(((2)*Math.PI)/n)));
      context.closePath();
      context.stroke();
   }
   e = 2*r*(Math.sin(Math.PI/n));
   e = (r- Math.sqrt((r*r)-((e/2)*(e/2))));
   var tolerance = document.getElementById('printE');
   tolerance.innerHTML= 'Tolerance: '+e;
   //ok, so. the arc angle is 2PI/n
   //I want the sagitta or an arbitraty chord in my bunch of arcs(polygon sides), 
   //which means I need the length of the chord
   //length of chord is 2rsin(PI/n)
   //length of sagitta is r-(r^2 - (chordLength/2)^2)^(-1)

}
var clearCanv = function(){
   context.clearRect(0, 0, canv.width, canv.height);
};