	/*File: http://weblab.cs.uml.edu/~ssouza/css/A03a.css
	91.461 Assignment 6: HTML forms and JavaScript
	Susan 'Uzi' Souza, Undergraduate Computer Science Student at UMass Lowell, Susan_Souza@student.uml.edu
	This assignment is meant to generate a multiplication table from input entered in a form on a single page.
	Created on October 21, 2014 by Uzi.
   Modified on October 23, 2014 to add checks for invalid input.
   Modified on November 22, 2014 to change back to using the submit event, add tabs, use the Number() function, jQuery Validation
   */
function tablegen(colMin, colMax, rowMin, rowMax, counter){
   console.log("Managed to call the tablegen function");
   
   var i ,k, m, n;
   i = Number(colMin);
   k = Number(rowMin);
   m = Number(colMax);
   n = Number(rowMax);
   
   if(!isNaN(m) && !isNaN(n) && !isNaN(i) && !isNaN(k)){
      var stringOut = "<div id=\"products" + counter + "\"><table>";
      if(i < m){//if the 'minimum' value entered was actually smaller than the 'maximum value, 
      //print the column values in ascending order
         for(i; i <= Number(colMax); i++){
            /* If we're about to print the first row of products, insert an empty 
            cell before we print first the range of the first factor*/
            if(i===Number(colMin)){
            stringOut +="<tr><td> </td>";
            /*console.log(stringOut + "Added that first space");*/
               if(k > n){//if the 'mimimum'  value for the rows was larger than the 'maximum' value for the rows, print in descending order
                  for(k; k >= Number(rowMax); k--){
                  // console.log(stringOut + "Adding index row");
                     stringOut +="<td>" + k + "</td>";
                     }
                     stringOut +="</tr>";
                  }
               else{
                  for(k; k <= Number(rowMax); k++){
                  // console.log(stringOut + "Adding index row");
                     stringOut +="<td>" + k + "</td>";
                     }
                     stringOut +="</tr>";
                  }
            }
            stringOut+= "<tr><td>" + i + "</td>";
            if(Number(rowMin) < Number(rowMax)){
               for(var j = Number(rowMin); j <= Number(rowMax); j++){
                /*console.log(stringOut + "Adding the rest of the content");*/
                  stringOut += "<td>" + (j*i) + "</td>";
               }
            }
            else{
                for(var j = Number(rowMin); j >= Number(rowMax); j--){
                   /*console.log(stringOut + "Adding the rest of the content");*/
                     stringOut += "<td>" + (j*i) + "</td>";
               }
            }
            stringOut += "</tr>";
         }
      }
      else {//if the 'mimimum'  value for the columns was larger than the 'maximum' value for the columns, print in descending order
         for(i; i >= m ; i--){
               /* If we're about to print the first row of products, insert an empty 
               cell before we print first the range of the first factor*/
               if(i === Number(colMin)){
               stringOut +="<tr><td> </td>";
               /*console.log(stringOut + "Added that first space");*/
               if(k > n){
                  for(k; k >= Number(rowMax); k--){
                  // console.log(stringOut + "Adding index row");
                     stringOut +="<td>" + k + "</td>";
                     }
                     stringOut +="</tr>";
                  }
               else{
                  for(k; k <= Number(rowMax); k++){//adds index row in ascending order
                  // console.log(stringOut + "Adding index row");
                     stringOut +="<td>" + k + "</td>";
                     }
                     stringOut +="</tr>";
                  }
               }
                  stringOut+= "<tr><td>" + i + "</td>";
              if(Number(rowMin) < Number(rowMax)){//fills table contents from minimum to maximum based column values
               for(var j = Number(rowMin); j <= Number(rowMax); j++){
                /*console.log(stringOut + "Adding the rest of the content");*/
                  stringOut += "<td>" + (j*i) + "</td>";
               }
            }
            else{
               for(var j = Number(rowMin); j >= Number(rowMax); j--){//fills table contents with column values in descending order
                   /*console.log(stringOut + "Adding the rest of the content");*/
                     stringOut += "<td>" + (j*i) + "</td>";
               }
            }
            stringOut += "</tr>";
         }
      
      }
      
      stringOut += "</table></div>"
      if(counter !== 1){
         $("#products").append(stringOut);
      }
      else{
         $("#products").html(stringOut);
      }
      return (counter+1);
   }
   else{
   return counter;
   }
};


   
 /*The following code from Curran's lecture, found here:  http://curran.github.io/screencasts/navigation/examples/viewer/#/23  */
  // Sets the "active" class on the active navigation link.
  function setActiveLink(fragmentId){
    $("#tabLinks").each(function (i, linkElement) {
      var link = $(linkElement),
          pageName = link.attr("href").substr(1);
      if(pageName === fragmentId) {
        link.attr("class", "active");
      } else {
        link.removeAttr("class");
      }
    });
  }
  /*End code from Curran */

$(document).ready(function(){
   var counter = 1;
   var historyCounter = counter;
   var tabslinks = $('#tabLinks');
   $('#productTabs').tabs();
   
   /*The following from Prof. Heines' tabs exampel on JSFiddle, found here:  http://jsfiddle.net/heines/q6w4d5rz/9/*/
   // the div containing the complete tabs structure
  var tabsdiv = $("#productTabs") ;
  // the list of tabs
  var tabslist = tabslinks.find("ul") ;
  /*end snippet from Prof. Heines' JSFiddle*/
  
  $("#fourFieldForm").validate({
         rules: {
            rowMin: {
               required: true,
               number: true,
               //max: Number(rowMax.value)
                
            } ,
               colMin:{
               required: true,
               number: true,
              // max: Number(colMax.value)
            } ,
            colMax:{
               required: true,
               number: true,
              // min: Number(colMin.value)
            } ,
            rowMax: {
               required: true,
               number: true,
              // min: Number(rowMin.value)    
            }
         },  // end rules
         messages: {
            rowMin: {
               required:  function(){
                  $("#rowMin").focus();
                  return "Please enter a positive value for the lower bound of the first multiplicand.<br>"
               },
               number: function(){
                  $("#rowMin").focus();
                  return "Please enter a positive number for the lower bound of the first multiplicand.<br>"
               },
               max:  function(){
                 // $("#rowMin").focus();
                  return "The number entered for the first value lower bound must be smaller than the upper bound value entered.<br>"
                  }
            },
            rowMax: {
               required: function(){
                  $("#rowMax").focus();
                  return "Please enter a positive value for  the upper bound of the first multiplicand.<br>"
               },
                number: function(){
                  $("#rowMax").focus();
                  return "Please enter a positive number for the upper bound of the first multiplicand.<br>"
               },
               min:  function(){
                  //$("#rowMax").focus();
                  return"The number entered for the first value upper bound must be larger than the lower bound value entered.<br>";
                  }
            },
            colMin: {
               required: function(){
                $("#colMin").focus();
               return "Please enter a positive number for the lower bound of the second multiplicand.<br>"
               },
                number: function(){
                  $("#colMin").focus();
                  return "Please enter a positive number for the lower bound of the second multiplicand.<br>"
               },
               max: function(){
                  //$("#colMin").focus();
                  return "The number entered for the second value lower bound must be smaller than the upper bound value entered.<br>";
               }
             },
            colMax: {
               required: function(){
                $("#colMax").focus();
                  return "Please enter a positive value for the upper bound of the second multiplicand.<br>"
               },
               number: function(){
                  $("#colMax").focus();
                  return "Please enter a positive number for the upper bound of the second multiplicand.<br>"
               },
               min: function(){
                 // $("#colMax").focus();
                  return "The number entered for the second value upper bound must be larger than the lower bound value entered.<br>"
               }
            }
         },      // end messages
         errorPlacement : function( error, element ) {
          $(error).appendTo( $("#formBox") ) ;
          
         },
         success: function(error, element){
         
         }
         
      }) ; // end validate();

   $("#fourFieldForm").submit(function(){
      //console.log("Form submitted!");
      
      console.log("Entered value ranges:" + this.colMin.value + "-" + this.colMax.value + ", " + this.rowMin.value + "-" + this.rowMax.value);
         
        // inputcheck(this.colMin.value, this.colMax.value, this.rowMin.value, this.rowMax.value);
           //if(counter!== 1 /*&& counter === historyCounter*/){
            tabslinks.append('<li><a href="#products' + counter + '">' + 'Table ' + counter + '</a><span class=\"ui-icon ui-icon-close\" role=\"presentation\">&nbsp;X&nbsp;</span></li>' ) ; 
            
         //}
         counter = tablegen(this.colMin.value, this.colMax.value, this.rowMin.value, this.rowMax.value, counter);
         console.log(counter);
         console.log(historyCounter);
      
         if(counter === historyCounter && historyCounter > 1){//meant to prevent duplicate tabs with incorrect contents from appearing
            //tabsdiv.remove(tabsdiv.lastchild);
           
           tabslinks.remove(tabslist.lastchild);
        }
        /*this from jQueryUI Demos: http://jqueryui.com/tabs/#manipulation  */
    // close icon: removing the tab on click
    $("#productTabs").delegate( "span.ui-icon-close", "click", function() {
      var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
      $( "#" + panelId ).remove();
      $("#productTabs").tabs( "refresh" );
    });
/* end from jQueryUI Demos code */
         
         historyCounter = counter;
         
         $("#productTabs").tabs( "refresh" ) ;  
     
   });

});