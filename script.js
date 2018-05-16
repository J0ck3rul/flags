var maxPhoto = 4;
window.onload =  SetSlide(1);
var photo=1;

function pressKey(event)
{
    console.log(event);
}

function mouseOver(string)
{
    console.log(string);
    document.getElementById(string).style.opacity='0.3';
    q= document.createElement("span");
    q.setAttribute("class","middle");
    q.setAttribute("id","ma-sa")
   // q.setAtribute("class", "middle")
    q.innerHTML = string;
    q.style.zindex = '1';
     document.getElementById("inde"+photo).appendChild(q);
}
function mouseOut(string)
{
    console.log(string);
    document.getElementById("ma-sa").remove();
  
    document.getElementById(string).style.opacity = '1  ';
}

function plusImg(much)
{   
   
    if(much===1)
    photo-=1;
    if(much===2)
    photo+=1;
   // console.log(photo);
    if(photo===(maxPhoto+1))
    photo=1;
    if(photo===0)
    photo=maxPhoto;
  //  photo = photo + much;
 
    console.log(photo);
    SetSlide(photo);
}

function SetSlide(index)
{  console.log(index);
     photo = index;
    document.getElementById("index" + index).style.display="block";

   // q.style.display = "block";
    let i;
    for(i=1;i<=maxPhoto;i++)
    {
        if(i!=index)
        {
            document.getElementById("index"+i).style.display = "none";
        }
    }


}