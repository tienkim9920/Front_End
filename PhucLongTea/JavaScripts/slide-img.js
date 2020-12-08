var slideIndex=0;
Sliding(slideIndex);

function Sliding(n){
    var x=document.getElementsByClassName("banner");
    var y=document.getElementsByClassName("dot");
    for(var i=0;i<x.length;i++){
      x[i].style.display="none";
    }
    for(var i=0;i<y.length;i++){
        y[i].style.backgroundColor="#bbb";
    }
        if(n>=x.length){slideIndex=0;}
        x[slideIndex].style.display="block"; 
        y[slideIndex].style.backgroundColor="green";
}
function PageImg(n){
    Sliding(slideIndex=n-1);
}
function  Next(n){
    Sliding(slideIndex+=n);
}
function Pre(n){
    slideIndex+=n;
    if(slideIndex+1==0){
        slideIndex=2;
        Sliding(slideIndex);
    }
    else{
        Sliding(slideIndex);
    }
}






