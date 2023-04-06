// question 1
let data =prompt("enter any number");
let data1 =prompt("enter any no");
if(data>data1){
    console.log(data + " is the largesst no");
}
else if(data1>data){
    console.log(data1 + " is the largest no");
}
// question 2
let num =prompt("enter any no");
if(num>0){
    alert("numer is positive")
}
else if(num<0){
    alert("number is negative")
}
// question 3
let a=prompt("write any no");
let b=prompt("write any no");
let c=prompt("write any no");
let d=prompt("write any no");
let e=prompt("write any no");
if( a>b && a>c && a>d && a>e){
    console.log(a+" is the largest no")
}
else if( b>a && b>c && b>d && b>e){
    console.log(b+" is the largest no");
}
else if( c>a && c>b && c>d && c>e){
    console.log(b+" is the largest no");
}
else if( c>a && c>b && c>d && c>e){
    console.log(b+" is the largest no");
}
else if( d>a && d>b && d>c && d>e){
    console.log(b+" is the largest no");
}
else{
    console.log(e+" is the largest no");
}
// question 4
let i
for ( i=0; i<=15; i++) {
    if (i === 0) {
            console.log(i +  " is even");
    }
    else if (i % 2 === 0) {
            console.log(i + " is even");   
    }
    else {
            console.log(i + " is odd");
    }
}
// question 5
let sub1=+prompt("enter your no");
let sub2=+prompt("enter your no");
let avgno = (sub1+sub2)
let per = (avgno/200)*100
if(per<100 && per>90){
    alert(" your grade is A")
}
else if(per<90 && per>80){
    alert("your grade is B")
}
else if(per<80 && per>70){
    alert("your grade is c")
}
else if(per<70  && per>60){
    alert("your grade is D")
}
else if(per<60){
    alert("your grade is F")
}
//question 6
let j
for (  j = 1; j <= 100; j++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( j + " FizzBuzz" );
  }
  else if ( j%3 === 0 ) 
  {
    console.log(j+ " Fizz" );
  }
  else if ( j%5 === 0 ) 
  {
    console.log(j+ " Buzz" );
  }
  else
  {
    console.log(j);
  }
}
// question 7
var s,m,star;
for(s=1; s <=6; s++)
{
   for (m=1; m < s; m++)
     {
    star=star+("*");        
      }
 console.log(star);
 star='';    
}
