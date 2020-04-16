var i1=document.getElementById("i1");
var i2=document.getElementById("i2");
var i3=document.getElementById("i3");
var i4=document.getElementById("i4");

var M=document.querySelector('.music');
var Slide=document.querySelector('.slider');
var head=document.querySelector('.artistMusic h1');
var imgMovt=document.querySelector('.music .artistMusic img')

var animate=gsap.timeline();
i1.addEventListener('click',()=>
{
    slider.style.display="none";
    M.style.display="block";
    animate.to(M,{
        duration:1.2,
        ease:"slow",
        backgroundColor:"#35a4cc",

    });
    imgMovt.src="Img/Top1.jpg";
    head.textContent="Michael Henry";
    animate.to(head,{
        y:10,
        opacity:1,
        duration:1,
        ease:'slow',

    });


    animate.to(imgMovt,{
        duration:1,
        ease:"slow",
        y:100,
        opacity:1,

    });
});


i2.addEventListener('click',()=>
{
    slider.style.display="none";
    M.style.display="block";
    animate.to(M,{
        duration:1.2,
        ease:"slow",
        backgroundColor:"orange",

    });
    imgMovt.src="Img/Top2.jpg";
    head.textContent="James Smith";
    animate.to(head,{
        y:10,
        opacity:1,
        duration:1,
        ease:'slow',

    });
    animate.to(imgMovt,{
        duration:1,
        ease:"slow",
        y:100,
        opacity:1,

    });
});
i3.addEventListener('click',()=>
{
    slider.style.display="none";
    M.style.display="block";
    animate.to(M,{
        duration:1.2,
        ease:"slow",
        backgroundColor:"pink",

    });
    imgMovt.src="Img/Top3.jpg";
    head.textContent="Liza Willi";
    animate.to(head,{
        y:10,
        opacity:1,
        duration:1,
        ease:'slow',

    });
    animate.to(imgMovt,{
        duration:1,
        ease:"slow",
        y:100,
        opacity:1,

    });
});

i4.addEventListener('click',()=>
{
    slider.style.display="none";
    M.style.display="block";
    animate.to(M,{
        duration:1.2,
        ease:"slow",
        backgroundColor:"lightgrey",

    });
    imgMovt.src="Img/Top4.jpg";
    head.textContent="Henry John";
    animate.to(head,{
        y:10,
        opacity:1,
        duration:1,
        ease:'slow',

    });
    animate.to(imgMovt,{
        duration:1,
        ease:"slow",
        y:100,
        opacity:1,

    });
});