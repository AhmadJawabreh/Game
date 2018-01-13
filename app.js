var arry=[];
var Timer=59,numnotfound=6,countpic=0,numfound=0,finshtime;
var c1 = document.getElementById("c1"),
    c2 = document.getElementById("c2"),
    c3 = document.getElementById("c3"),
    c4 = document.getElementById("c4"),
    c5 = document.getElementById("c5"),
    c6 = document.getElementById("c6"),
    c7 = document.getElementById("c7"),
    c8 = document.getElementById("c8"),
    c9 = document.getElementById("c9"),
    c10 = document.getElementById("c10"),
    c11 = document.getElementById("c11"),
    c12 = document.getElementById("c12");
    document.getElementById("notfound").textContent = "Not Found :  "+ numnotfound;
    document.getElementById("found").textContent ="Found :  "+0;
 var a =  setInterval(function(){ document.getElementById("Time").textContent = "Time : " + Timer--; if(Timer <0){ Timer = 0; clearInterval(a);} },1000);
  
c1.onclick = function() {
    if(Timer>0 )
        {
   c1.src="136088901112.gif";
   arry.push(c1); 
    if(arry.length==2)
        test();
        }
};
c8.onclick = function() {
    if(Timer>0 )
        {
     c8.src="136088901112.gif";
   arry.push(c8);
      if(arry.length==2)
          test();
        }
};
c2.onclick = function(){
   if(Timer>0 )
        {
     c2.src="19583278-Cute-baby-duck-cartoon-thumb-up-Stock-Vector-animal.jpg";
   arry.push(c2); 
    if(arry.length==2)
        test(); 
        }
    
};
c7.onclick = function(){
    if(Timer>0)
    c7.src="19583278-Cute-baby-duck-cartoon-thumb-up-Stock-Vector-animal.jpg";
   arry.push(c7); 
    if(arry.length==2)
        test(); 
    
};
c3.onclick = function(){
    if(Timer>0)
    c3.src="256045fe02f8408b467b4d4a34aeaf0ec2a909.png";
   arry.push(c3); 
    if(arry.length==2)
        test(); 
    
};
c11.onclick = function(){
    if(Timer>0)
     c11.src="256045fe02f8408b467b4d4a34aeaf0ec2a909.png";
   arry.push(c11); 
    if(arry.length==2)
        test(); 
    
};
c4.onclick = function(){
    if(Timer>0)
     c4.src="6TpokXyyc-187x300.jpg";
   arry.push(c4); 
    if(arry.length==2)
        test(); 
    
};
c10.onclick = function(){
    if(Timer>0)
      c10.src="6TpokXyyc-187x300.jpg";
   arry.push(c10); 
    if(arry.length==2)
        test(); 
    
};
c6.onclick = function(){
    if(Timer>0)
      c6.src="94e842569fdcda7f45b86a50d63e77d0.jpg";
   arry.push(c6); 
    if(arry.length==2)
        test(); 
    
};
c12.onclick = function(){
    if(Timer>0)
       c12.src="94e842569fdcda7f45b86a50d63e77d0.jpg";
   arry.push(c12); 
    if(arry.length==2)
        test(); 
    
};
c5.onclick = function(){
    if(Timer>0)
  c5.src="a2.PNG";
   arry.push(c5); 
    if(arry.length==2)
        test(); 
    
};
c9.onclick = function(){
    if(Timer>0)
    c9.src="a2.PNG";
   arry.push(c9); 
    if(arry.length==2)
        test(); 
};
function test(){
   
   if(arry[0].getAttribute('src') == arry[1].getAttribute('src') && arry[0]!= arry[1])
       {
           setTimeout(function(){ wedid(); },300);
         if(arry[0] == c1 || arry[1] == c1 )
             {
                 
                 document.getElementById("pic1").style.opacity= 0.9;
             }
           else if(arry[0] == c5 || arry[1] == c5)
               {
                    document.getElementById("pic6").style.opacity= 0.9;
               }
           else if(arry[0] == c6 || arry[1] == c6)
               {
                    document.getElementById("pic5").style.opacity= 0.9;
               }
           else if(arry[0] == c4 || arry[1] == c4)
               {
                    document.getElementById("pic4").style.opacity= 0.9;
               }
           else if(arry[0] == c3 || arry[1] == c3)
               {
                    document.getElementById("pic3").style.opacity= 0.9;
               }
           else if(arry[0] == c2 || arry[1] == c2)
               {
                    document.getElementById("pic2").style.opacity= 0.9;
               }
      document.getElementById("notfound").textContent =  "Not Found :  "+  (--numnotfound);
      document.getElementById("found").textContent ="Found :  "+(++numfound);
       }
    
    else
    {
        
       setTimeout(function(){ nowe(); }, 2000 );
       
    }
}
setInterval( function(){ 
    if(Timer <=0 || numfound ==  6 )
        {
    if(numfound ==  6)
        {
            clearInterval(a);
            document.getElementById("fin").style.fontSize="45px";
            setTimeout(function() { 
             document.getElementById("fin").style.display="block"; }, 500);
            
        }
    else if(numfound !=  6)
        {
             document.getElementById("fin").textContent="you losser";
             document.getElementById("fin").style.fontSize="45px";
             document.getElementById("fin").style.color="red";
            setTimeout(function() { 
             document.getElementById("fin").style.display="block"; }, 500);
}
            
        }},1000);
function nowe(){
    
     arry[0].src="m1.jpg"; arry[1].src="m1.jpg";
         arry.length=0; 
    
}
function wedid(){
    arry[0].style.display="none";
   arry[1].style.display="none";
    arry.length=0;
}
/*
function test18(){
   
    if( document.getElementById("c8").getAttribute('src') ==  document.getElementById("c1").getAttribute('src')){
         console.log("1");
         document.getElementById("c1").style.dispaly="none";
         document.getElementById("c8").style.dispaly="none";
         document.getElementById("notfound").textContent = "Not Found :  "+ numnotfound--;
         document.getElementById("found").textContent ="Found :  "+constant++;
    }
    
}
*/
/*var i=0.1;
var f=0,a,as=1;
document.getElementById("d1").onclick = function() 
{
    as=1;
    i=0.1;
         a=setInterval(function(){ wedid(); }, 70)
};

function wedid(){
     if(f == 0)
              {
                  
           i+=0.1
            
            document.getElementById("d2").style.display="block";
            document.getElementById("d2").style.opacity=i;
                  if(i >= 1.0)
                      {
                      f=1;
                      clearInterval(a);
                      }
              }
    
        else if(f==1 && as >=0)
            {
                as-=0.1
                document.getElementById("d2").style.opacity=as;
                  if(as <=0.1)
                      {
                      f=0;
                           document.getElementById("d2").style.display="none";
                          clearInterval(a);
                      }
            }
}*/
/*
var countp,countbut,c1,c2;
var a,f;
document.getElementById("b1").onclick = function() {
    countbut=40 ;
    countp=4 ;
    c1=0 ;
    c2=0;
    f=0;
    a=setInterval( function(){ a1(); }, 70);
    
};

function a1() {
   
 if(f == 0)
 {
    if(countbut>15)
        {
             console.log(countbut);
            countbut--;
            document.getElementById("b1").style.top= countbut +"px";
            
        }
     if(countp>0)
        {
           
            countp--;
            document.getElementById("p1").style.top=countp+"px";
            
        }  
     
            if(countp == 0 && countbut == 15)
                {
                      f=1;
                }
             
 }
        
    
    
 if (f == 1)
 {
            
     if(c1<=40)
        {
            c1++;
            document.getElementById("b1").style.top= c1 +"px";  
        }
     if(c2<=4)
        {
            c2++;
            document.getElementById("p1").style.top=c2+"px";
            
        }   
     if(c1 == 41 && c2 ==5)
         {
            f=0;
       // for(var i=0;i<count;i++)
        //clearInterval(a);
         }
               
} 
    
}






*/
/*
var counth =100,countw=100,f=0;
var a;
document.getElementById("b").onclick = function() {
    a = setInterval(function(){ test(); },10);  
};
function test() {
    if(counth<=250 && countw == 100)
        {
            counth++;
            document.getElementById("mydiv").style.height=counth;
            
        }
    
   else if(counth>=250 && countw <= 250 )
        {
            
            countw++;
            document.getElementById("mydiv").style.width=countw; 
        }
    
   else if(counth>100)
        {
            counth--;
             document.getElementById("mydiv").style.height=counth; 
        }
    
   else if(countw>=100)
        {
            countw--;
            document.getElementById("mydiv").style.width=countw; 
            
            if(countw ==100)
                f=1;
        } 
    if(f==1)
        {
            console.log(f);
            f=0;
        clearInterval(a);
        }    
};

document.getElementById("b1").onclick = function() {
    
     clearInterval(a);
};*/
