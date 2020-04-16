var s=document.getElementById("i");
var slider=document.querySelector('.slider');
var side=document.querySelector('.box2');
var t=gsap.timeline();
var flag=false;
var cross=document.querySelector('.cross');
var slider=document.querySelector('.slider');
var musicBox=document.querySelector('.music');
s.addEventListener('click',()=>{
    if(flag===false){
       
       
        t.to(slider,{
        
            duration:0.4,
            ease:"power 3",
            width:"70%",
 
    
        });
       side.style.display="block";
       


        flag=true;
    

    }
   
});

cross.addEventListener('click',()=>{
    if(flag===true){
       
       
        t.to(slider,{
        
            duration:0.2,
            ease:"power 3",
            width:"100%",
      
    
        });

       side.style.display="none";
       musicBox.style.display="none";
       slider.style.display="block";
        flag=false;
    

    }
});

var next1=document.querySelector('.next1');
var next2=document.querySelector('.next2');
var heading1=document.querySelector('.headings');
var heading2=document.querySelector('.headings2');
var flag2=false;
next1.addEventListener('click',()=>
{
    if(flag2===false){
heading2.style.display="none";
heading1.style.display="block";
t.to(heading1,{

    opacity:1,
    duration:2,
    ease:"slow",
    y:5,
    
});

flag2=true;
    }


});

next2.addEventListener('click',()=>
{
    if(flag2===true){

heading1.style.display="none";
heading2.style.display="block";
t.to(heading2,{

    opacity:1,
    duration:2,
    ease:"slow",
    x:5,
    
});

flag2=true;
    }


});

