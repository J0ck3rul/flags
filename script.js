document.getElementById("romania").onmouseover = function() {mouseOver("romania")}
document.getElementById("greece").onmouseover = function() {mouseOver("greece")}
document.getElementById("india").onmouseover = function() {mouseOver("india")}
document.getElementById("spain").onmouseover = function() {mouseOver("spain")}

document.getElementById("romania").onmouseout = function() {mouseOut("romania")}
document.getElementById("greece").onmouseout = function() {mouseOut("greece")}
document.getElementById("india").onmouseout = function() {mouseOut("india")}
document.getElementById("spain").onmouseout = function() {mouseOut("spain")}

function mouseOver(string)
{
    console.log(string);
    document.getElementById(string).style.opacity='0.3';
    q= document.createElement("span");
    q.setAttribute("class","middle");
    q.setAttribute("id","ma-sa")
 //   q.setAtribute("class", "middle")
    q.innerHTML = string;
    q.style.zindex = '1';
    document.getElementById(string+"1").appendChild(q);
}
function mouseOut(string)
{
    console.log(string);
   document.getElementById("ma-sa").remove();
  
    document.getElementById(string).style.opacity = '1  ';
}