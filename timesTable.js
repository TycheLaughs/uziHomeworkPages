	/*File: http://weblab.cs.uml.edu/~ssouza/css/A03a.css
	91.461 Assignment 6: HTML forms and JavaScript
	Susan 'Uzi' Souza, Undergraduate Computer Science Student at UMass Lowell, Susan_Souza@student.uml.edu
	This assignment is meant to generate a multiplication table from input entered in a form on a single page.
	Created on October 21, 2014 by Uzi.
   Modified on October 23, 2014 to add checks for invalid input.
   */
function tablegen(colMin, colMax, rowMin, rowMax){
console.log("Actually managed to call the tablegen function");
var stringOut = "<table>";
var i ,k;
i = colMin;
k = rowMin;
for(i; i <= colMax; i++){
   /* If we're about to print the first row of products, insert an empty 
   cell before we print first the range of the first factor*/
   if(i===colMin){
   stringOut +="<tr><td> </td>";
   console.log(stringOut + "Added that first space");

   for(k; k <= rowMax; k++){
    console.log(stringOut + "Adding index row");
      stringOut +="<td>" + k + "</td>";
      };
      stringOut +="</tr>";
   };
      stringOut+= "<tr><td>" + i + "</td>";
   for(var j = rowMin; j <= rowMax; j++){
    console.log(stringOut + "Adding the rest of the damn content");

   stringOut += "<td>" + (j*i) + "</td>";
   };
   stringOut += "</tr>";
};
stringOut += "</table>"
$("#products").html(stringOut);
};

function inputcheck(imp1, imp2, imp3, imp4){
   var errStringOut = "";/*This string holds error messages to place next to invalid fields*/
   var encounteredError = false;
   /*first clear all error messages*/
   $("#in1Error").html(errStringOut);
   $("#in2Error").html(errStringOut);
   $("#in3Error").html(errStringOut);
   $("#in4Error").html(errStringOut);
   if(isNaN(imp1)){ /*if the input value is invalid by virtue of not being a number...*/
   errStringOut = "Please enter a number for the lower end of the range for your column to multiply.";
   $("#in1Error").html(errStringOut); /*Shove an error mesage into the output string and put that into the span by the indicated field*/
   $("#colMin").focus();/*also, give said field focus*/
   encounteredError = true;
   };
   if(isNaN(imp2)){
      errStringOut = "<br> Please enter a number for the upper end of the range for your column to multiply.";
      $("#in2Error").html(errStringOut);
      $("#colMax").focus();
      encounteredError = true;
   };
   if(isNaN(imp3)){
      errStringOut = "<br> Please enter a number for the lower end of the range for your row to multiply.";
      $("#in3Error").html(errStringOut);
      $("#rowMin").focus();
      encounteredError = true;
   };    
   if(isNaN(imp4)){
      errStringOut = "<br> Please enter a number for the upper end of the range for your column to multiply.";
      $("#in4Error").html(errStringOut);
      $("#rowMax").focus();
      encounteredError = true;
   };
   if(imp2 < imp1){ /*if the input is invalid by virtue of the 'max' value being too small, the user is prompted to possibly make the 'minimum' value smaller.*/
      errStringOut = "<br> Please enter a minimum value smaller than the maximum you specified for this range.";
      $("#in1Error").html(errStringOut);
      $("#colMin").focus();
      encounteredError = true;
   };
   if(imp4 < imp3){
       errStringOut = "<br> Please enter a minimum value smaller than the maximum you specified for this range.";
      $("#in3Error").html(errStringOut);
      $("#rowMin").focus();
      encounteredError = true;
   };
   if(encounteredError == true){
   return false;
   };
return true;
};

$(document).ready(function(){

   /*$("#fourFieldForm").submit(function(){
      console.log("Entered value ranges:" + this.colMin.value + "-" + this.colMax.value + ", " + this.rowMin.value + "-" + this.rowMax.value);
      tablegen(this.colMin.value, this.colMax.value, this.rowMin.value, this.rowMax.value);
   
   });*/

      $("#fourFieldForm").change(function(){
      console.log("Form changed!");
      inputcheck(this.colMin.value, this.colMax.value, this.rowMin.value, this.rowMax.value);
      console.log("Entered value ranges:" + this.colMin.value + "-" + this.colMax.value + ", " + this.rowMin.value + "-" + this.rowMax.value);
      tablegen(this.colMin.value, this.colMax.value, this.rowMin.value, this.rowMax.value);
      });

});