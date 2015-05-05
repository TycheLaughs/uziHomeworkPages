/*Write a program to generate a right prism from any planar polygon.
Your input should be a computer model of the polygon (e.g., vertices, or edges, per
your choice) and a z height, and your program should output a computer model of the
prism. (This is modeling, not drawing, but you may, optionally draw your generated
model, for additional 5 points.)*/

      //attribute orders found when using console.log:
     /*  line [ style="stroke:rgb(0,0,255);stroke-width:3", y2="1", x2="1", y1="0", x1="0", id="line1" ] 6-prism.html:80:6
         polygon [ style="stroke:purple; stroke-width:3; fill:none", id="base", points="10,20 20,30 30,40 50,30 40,60 " ]*/
      var n;
      var ex = document.getElementById('extrusion');
      var bas = document.getElementById('base');
      var one = document.getElementById('line1');
      var two = document.getElementById('line2');
      var three = document.getElementById('line3');
      var four = document.getElementById('line4');
      var five = document.getElementById('line5');
      var six = document.getElementById('line6');
      var seven = document.getElementById('line7');
      var eight = document.getElementById('line8');
      var nine = document.getElementById('line9');
      var ten = document.getElementById('line10');
      var eleven = document.getElementById('line11');
      var twelve = document.getElementById('line12');
      var lineBeginX='';
      var lineBeginY='';
      var lineEndX='';
      var lineEndY='';
      var bp = [];
      var xp = [];
      var xIn=[];
      var yIn=[];
      var exCoords='';
      var bCoords='';
      var v = 0;
      var z = 0;
      //console.log(bas.attributes);
      function point(x,y){
         this.x = x;
         this.y = y;
      }
      point.prototype.coord = function(){
         return this.x + ','+ this.y;
      };
      //console.log(one.attributes);
      function gotNvalue(){
         n = Number(document.forms.namedItem('getInput').N.value);
         //console.log(n); 
         if(n <=12 && n > 0){
            document.getElementById('inputAdder').innerHTML = 'Enter x and y coordinate values for each point individually, in clockwise order from top right or center. <br>For best visual results, use x values from 10 to 390 and y values from 100 to 390:'+'<br>'+'<input type="text" name="xCoord" id="xCoord" onblur="gotX()">X'+'<br>'+'<input type="text" name="yCoord" id="yCoord" onblur="gotY()">Y';
            document.getElementById('pointsList').innerHTML = 'n='+ n +'<br>Your vertices:'+'<br>';
            
         }
         else{
            document.getElementById('inputAdder').innerHTML = 'Please enter a number between 3 and 12';
         }
      }
      function gotX(){
         var pList = document.getElementById('pointsList');
         var currentList = pList.innerHTML;
         var enteredX = Number(document.forms.namedItem('getInput').xCoord.value);
         if(v < 2*n){
            currentList+= '('+enteredX+',';
            pList.innerHTML= currentList;
            document.forms.namedItem('getInput').xCoord.value='';
            xIn.push(enteredX);
         }
         v++;
         //console.log(z);
      }
      function gotY(){
         var enteredY = Number(document.forms.namedItem('getInput').yCoord.value);
         var pList = document.getElementById('pointsList');
         var currentList = pList.innerHTML;
         if(v < 2*n){
            currentList+=' '+enteredY+')';
            pList.innerHTML = currentList;
            document.forms.namedItem('getInput').yCoord.value='';
            yIn.push(enteredY);
         }
         v++;
      }
      function gotHeight(){
         z = Math.abs(Number(document.forms.namedItem('getInput').Z.value));
      }
     
      function draw(){
         while(bp.length <= n){
            for(var i = 0; i < n; i++){
               bp.push(new point(xIn[i], yIn[i]));
            }
            var bas = document.getElementById('base');
            for(var i = 0; i < bp.length; i++){
               bCoords += bp[i].coord() + ' ';
               xp.push(new point(bp[i].x, (bp[i].y)-z));
               exCoords += xp[i].coord() + ' ';
            }
         //console.log(bCoords);
         bas.attributes[2].value = bCoords;
        // console.log(bas.attributes);
         ex.attributes[2].value = exCoords;
         //console.log(ex.attributes);
         //line attributes: [0]style [1]y2 [2]x2 [3]y1 [4]x1 [5]id
            if(n>0){
               one.attributes[4].value = bp[0].x;
               one.attributes[3].value = bp[0].y;
               one.attributes[2].value = xp[0].x;
               one.attributes[1].value = xp[0].y;
            }
            if(n>1){
               two.attributes[4].value = bp[1].x;
               two.attributes[3].value = bp[1].y;
               two.attributes[2].value = xp[1].x;
               two.attributes[1].value = xp[1].y;
            }
            if(n>2){
               three.attributes[4].value = bp[2].x;
               three.attributes[3].value = bp[2].y;
               three.attributes[2].value = xp[2].x;
               three.attributes[1].value = xp[2].y;
            }
            if(n>3){
               four.attributes[4].value = bp[3].x;
               four.attributes[3].value = bp[3].y;
               four.attributes[2].value = xp[3].x;
               four.attributes[1].value = xp[3].y;
            }
            if(n>4){
               five.attributes[4].value = bp[4].x;
               five.attributes[3].value = bp[4].y;
               five.attributes[2].value = xp[4].x;
               five.attributes[1].value = xp[4].y;
            }
            if(n>5){
               six.attributes[4].value = bp[5].x;
               six.attributes[3].value = bp[5].y;
               six.attributes[2].value = xp[5].x;
               six.attributes[1].value = xp[5].y;
            }
            if(n>6){
               seven.attributes[4].value = bp[6].x;
               seven.attributes[3].value = bp[6].y;
               seven.attributes[2].value = xp[6].x;
               seven.attributes[1].value = xp[6].y;
            }
            if(n>7){
               eight.attributes[4].value = bp[7].x;
               eight.attributes[3].value = bp[7].y;
               eight.attributes[2].value = xp[7].x;
               eight.attributes[1].value = xp[7].y;
            }
            if(n>8){
               nine.attributes[4].value = bp[8].x;
               nine.attributes[3].value = bp[8].y;
               nine.attributes[2].value = xp[8].x;
               nine.attributes[1].value = xp[8].y;
            }
            if(n>9){
               ten.attributes[4].value = bp[9].x;
               ten.attributes[3].value = bp[9].y;
               ten.attributes[2].value = xp[9].x;
               ten.attributes[1].value = xp[9].y;
            }
            if(n>10){
               eleven.attributes[4].value = bp[10].x;
               eleven.attributes[3].value = bp[10].y;
               eleven.attributes[2].value = xp[10].x;
               eleven.attributes[1].value = xp[10].y;
            }
            if(n>11){
               twelve.attributes[4].value = bp[11].x;
               twelve.attributes[3].value = bp[11].y;
               twelve.attributes[2].value = xp[11].x;
               twelve.attributes[1].value = xp[11].y;
            }
         }
      }