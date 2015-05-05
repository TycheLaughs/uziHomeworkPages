/*Write a program to create the following tower of 3-D object: start with
any planar 2-D polygon in the X-Y plane (e.g., the one above). Create a prism (using
the above program). Other inputs should be HOWMANY (how many layers),
THICKNESS (how thick is each layer, this is the z height in the previous program),
and SHRINK (the percentage shrink factor in each layer).*/

      //attribute orders found when using console.log:
     /*  line [ style="stroke:rgb(0,0,255);stroke-width:3", y2="1", x2="1", y1="0", x1="0", id="line1" ] 6-prism.html:80:6
         polygon [ style="stroke:purple; stroke-width:3; fill:none", id="base", points="10,20 20,30 30,40 50,30 40,60 " ]*/
      var n;
      var p;
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
      var s;
      var stack=[];
      var temp='';
      var dispX;
      var dispY;
      //console.log(bas.attributes);
      function point(x,y){
         this.x = x;
         this.y = y;
      }
      point.prototype.coord = function(){
         return this.x + ','+ this.y;
      };
      //console.log(one.attributes);
      function gotPvalue(){
         p = Number(document.forms.namedItem('getInput').P.value);
         //console.log(n); 
         if(p <=12 && p > 0){
            document.getElementById('inputAdder').innerHTML = 'Enter x and y coordinate values for each point individually, in clockwise order from top right or center.<br>For best visual results, use x values from 20 to 300 and y values from 100 to 300:'+'<br>'+'<input type="text" name="xCoord" id="xCoord" onblur="gotX()">X'+'<br>'+'<input type="text" name="yCoord" id="yCoord" onblur="gotY()">Y';
            document.getElementById('pointsList').innerHTML = '<br>'+'Number of vertices:'+ p +'<br>';
            
         }
         else{
            document.getElementById('inputAdder').innerHTML = 'Please enter a number between 3 and 12';
         }
      }
      function gotX(){
         var pList = document.getElementById('pointsList');
         var currentList = pList.innerHTML;
         var enteredX = Number(document.forms.namedItem('getInput').xCoord.value);
         if(xIn.length === p-1){
            dispX = enteredX;
         }
         if(v < 2*p){
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
          if(yIn.length === p-1){
            dispY = enteredY;
         }
         if(v < 2*p){
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
      function gotShrink(){
         s = Math.abs(Number(document.forms.namedItem('getInput').S.value));
      }
      function gotNvalue(){
         n = Number(document.forms.namedItem('getInput').N.value);
         if(p <=12 && p > 0 && n > 0){
            document.getElementById('inputAdder').innerHTML = 'Enter x and y coordinate values for each point individually, in either clockwise or counter clockwise order. <br>For best visual results, use x values from 20 to 300 and y values from 100 to 300:'+'<br>'+'<input type="text" name="xCoord" id="xCoord" onblur="gotX()">X'+'<br>'+'<input type="text" name="yCoord" id="yCoord" onblur="gotY()">Y';
            document.getElementById('pointsList').innerHTML = 'Layers: '+n +'<br>'+'Number of vertices:'+ p +'<br>';
            
         }
      }
      
      function draw(){
//what I -want- to do is generate a string with the correct xml, using incremental id's instead of what I have so far and scaling the base vertices while keeping the length of the connecting lines the same.
      //from user, I get the base vertices(bp etc), the layer height(z), the scaling factor(s) and the number of layers(n)   
         
               
                  for(var i = 0; i < p; i++){
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
                  if(p>0){
                     one.attributes[4].value = bp[0].x;
                     one.attributes[3].value = bp[0].y;
                     one.attributes[2].value = xp[0].x;
                     one.attributes[1].value = xp[0].y;
                  }
                  if(p>1){
                     two.attributes[4].value = bp[1].x;
                     two.attributes[3].value = bp[1].y;
                     two.attributes[2].value = xp[1].x;
                     two.attributes[1].value = xp[1].y;
                  }
                  if(p>2){
                     three.attributes[4].value = bp[2].x;
                     three.attributes[3].value = bp[2].y;
                     three.attributes[2].value = xp[2].x;
                     three.attributes[1].value = xp[2].y;
                  }
                  if(p>3){
                     four.attributes[4].value = bp[3].x;
                     four.attributes[3].value = bp[3].y;
                     four.attributes[2].value = xp[3].x;
                     four.attributes[1].value = xp[3].y;
                  }
                  if(p>4){
                     five.attributes[4].value = bp[4].x;
                     five.attributes[3].value = bp[4].y;
                     five.attributes[2].value = xp[4].x;
                     five.attributes[1].value = xp[4].y;
                  }
                  if(p>5){
                     six.attributes[4].value = bp[5].x;
                     six.attributes[3].value = bp[5].y;
                     six.attributes[2].value = xp[5].x;
                     six.attributes[1].value = xp[5].y;
                  }
                  if(p>6){
                     seven.attributes[4].value = bp[6].x;
                     seven.attributes[3].value = bp[6].y;
                     seven.attributes[2].value = xp[6].x;
                     seven.attributes[1].value = xp[6].y;
                  }
                  if(p>7){
                     eight.attributes[4].value = bp[7].x;
                     eight.attributes[3].value = bp[7].y;
                     eight.attributes[2].value = xp[7].x;
                     eight.attributes[1].value = xp[7].y;
                  }
                  if(p>8){
                     nine.attributes[4].value = bp[8].x;
                     nine.attributes[3].value = bp[8].y;
                     nine.attributes[2].value = xp[8].x;
                     nine.attributes[1].value = xp[8].y;
                  }
                  if(p>9){
                     ten.attributes[4].value = bp[9].x;
                     ten.attributes[3].value = bp[9].y;
                     ten.attributes[2].value = xp[9].x;
                     ten.attributes[1].value = xp[9].y;
                  }
                  if(p>10){
                     eleven.attributes[4].value = bp[10].x;
                     eleven.attributes[3].value = bp[10].y;
                     eleven.attributes[2].value = xp[10].x;
                     eleven.attributes[1].value = xp[10].y;
                  }
                  if(p>11){
                     twelve.attributes[4].value = bp[11].x;
                     twelve.attributes[3].value = bp[11].y;
                     twelve.attributes[2].value = xp[11].x;
                     twelve.attributes[1].value = xp[11].y;
                  }
               
            /*
           //bCoords = '';
            //exCoords=''; */
            for(var j = 1; j < n ;j++){
               temp = '<polygon points=""id="base.'+ j +'" style="stroke:purple; stroke-width:2; fill:transparent" /><line id="line1.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" />'
               //<use xlink:href="#base" transform="scale('+(1-s/10)+') translate('+((s/10)+ dispX) +','+ (dispY-(s*(s/10))-(z*(j+2)))+')" id="base.'+ j+'"/>';
               temp += '<line id="line1.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><line id="line2.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><line id="line3.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><line id="line4.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><line id="line5.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><line id="line6.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><line id="line7.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><line id="line8" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><line id="line9.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><line id="line10.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><line id="line11.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><line id="line12.'+ j +'" x1="0" y1="0" x2="0" y2="0" style="stroke:purple;stroke-width:2" /><polygon points=""id="extrusion.'+ j +'" style="stroke:purple; stroke-width:2; fill:transparent" />';
             
              //console.log(temp);
               var view = document.getElementById('view');
               view = view.innerHTML;
               view += temp;
               temp = document.getElementById('view');
               temp.innerHTML = view;
               //var thing = document.getElementById('base.'+j);
               //console.log(thing.attributes[2]);
               
               ex = document.getElementById('extrusion.'+j);
               bas = document.getElementById('base.'+j);
               one = document.getElementById('line1.'+j);
               two = document.getElementById('line2.'+j);
               three = document.getElementById('line3.'+j);
               four = document.getElementById('line4.'+j);
               five = document.getElementById('line5.'+j);
               six = document.getElementById('line6.'+j);
               seven = document.getElementById('line7.'+j);
               eight = document.getElementById('line8.'+j);
               nine = document.getElementById('line9.'+j);
               ten = document.getElementById('line10.'+j);
               eleven = document.getElementById('line11.'+j);
               twelve = document.getElementById('line12.'+j);
               /*for(var i = 0; i <p; i++){
                        //are the number of vertices even? if so, check where i is. if less than or equal to half bp.length, decrement using s. otherwise, do so for up to half + 1
                        /*if(!(p%2)){//even # vertices
                        console.log('even');
                           if(i < p/2 && i > 0){
                              console.log(i);
                              bp[i].x -= Math.floor((bp[i].x*(s/10)));
                              
                           } 
                           else if (i >= p/2){bp[i].x +=Math.floor((bp[i].x*(s/10)));}
                           else{
                              bp[i].x = bp[i].x;
                           }
                        }
                        //odd # vertices
                        else{
                        console.log('odd');
                           if(i <= (p/2)){
                              bp[i].x -= Math.floor((bp[i].x*(s/10)));}
                           else{
                              bp[i].x += Math.floor((bp[i].x*(s/10)));
                           }
                        }
                      
                        //bp[i].y -= z;
                        //xp[i].x = bp[i].x;
                       // xp[i].y = (bp[i].y)-z;
                        //exCoords += xp[i].coord() + ' ';
                        bCoords += bp[i].coord() + ' ';
                     }*/
               
               bas.attributes[2].value = bCoords;
               var scl = 'scale('+(1-(j*(s/10)))+') translate('+(dispX +(dispX*(2*(1-((j*(s/10))))))) +','+(dispY - z)+')';//+'translate('+((s*(1-(s/10)))+dispX)+','+(s*(1-(s/10)))+')'

              
               bas.setAttribute("transform", scl);
              
               //console.log(bCoords);
               console.log(bas.attributes);
               ex.attributes[2].value = exCoords;
               ex.setAttribute("transform", scl);
               

               
               //console.log(ex.attributes);
               //line attributes: [0]style [1]y2 [2]x2 [3]y1 [4]x1 [5]id
                  if(p>0){
                     one.attributes[4].value = bp[0].x;
                     one.attributes[3].value = bp[0].y;
                     one.attributes[2].value = xp[0].x;
                     one.attributes[1].value = xp[0].y;
                     one.setAttribute("transform", scl);
                  }
                  if(p>1){
                     two.attributes[4].value = bp[1].x;
                     two.attributes[3].value = bp[1].y;
                     two.attributes[2].value = xp[1].x;
                     two.attributes[1].value = xp[1].y;
                     two.setAttribute("transform", scl);
                  }
                  if(p>2){
                     three.attributes[4].value = bp[2].x;
                     three.attributes[3].value = bp[2].y;
                     three.attributes[2].value = xp[2].x;
                     three.attributes[1].value = xp[2].y;
                     three.setAttribute("transform", scl);
                  }
                  if(p>3){
                     four.attributes[4].value = bp[3].x;
                     four.attributes[3].value = bp[3].y;
                     four.attributes[2].value = xp[3].x;
                     four.attributes[1].value = xp[3].y;
                     four.setAttribute("transform", scl);
                  }
                  if(p>4){
                     five.attributes[4].value = bp[4].x;
                     five.attributes[3].value = bp[4].y;
                     five.attributes[2].value = xp[4].x;
                     five.attributes[1].value = xp[4].y;
                     five.setAttribute("transform", scl);
                  }
                  if(p>5){
                     six.attributes[4].value = bp[5].x;
                     six.attributes[3].value = bp[5].y;
                     six.attributes[2].value = xp[5].x;
                     six.attributes[1].value = xp[5].y;
                     six.setAttribute("transform", scl);
                  }
                  if(p>6){
                     seven.attributes[4].value = bp[6].x;
                     seven.attributes[3].value = bp[6].y;
                     seven.attributes[2].value = xp[6].x;
                     seven.attributes[1].value = xp[6].y;
                     seven.setAttribute("transform", scl);
                  }
                  if(p>7){
                     eight.attributes[4].value = bp[7].x;
                     eight.attributes[3].value = bp[7].y;
                     eight.attributes[2].value = xp[7].x;
                     eight.attributes[1].value = xp[7].y;
                     eight.setAttribute("transform", scl);
                  }
                  if(p>8){
                     nine.attributes[4].value = bp[8].x;
                     nine.attributes[3].value = bp[8].y;
                     nine.attributes[2].value = xp[8].x;
                     nine.attributes[1].value = xp[8].y;
                     nine.setAttribute("transform", scl);
                  }
                  if(p>9){
                     ten.attributes[4].value = bp[9].x;
                     ten.attributes[3].value = bp[9].y;
                     ten.attributes[2].value = xp[9].x;
                     ten.attributes[1].value = xp[9].y;
                     ten.setAttribute("transform", scl);
                  }
                  if(p>10){
                     eleven.attributes[4].value = bp[10].x;
                     eleven.attributes[3].value = bp[10].y;
                     eleven.attributes[2].value = xp[10].x;
                     eleven.attributes[1].value = xp[10].y;
                     eleven.setAttribute("transform", scl);
                  }
                  if(p>11){
                     twelve.attributes[4].value = bp[11].x;
                     twelve.attributes[3].value = bp[11].y;
                     twelve.attributes[2].value = xp[11].x;
                     twelve.attributes[1].value = xp[11].y;
                     twelve.setAttribute("transform", scl);
                  }
               } 
            }
         
      