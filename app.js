 let a =document.querySelector('h1')
 a.innerHTML="Changed Html"
a.style.color="aqua"
a.style.backgroundColor="orange"

a.addEventListener("click",()=>{
     a.innerHTML="Changed Html"
a.style.color="aqua"
a.style.backgroundColor="orange"
console.log("Kxa ho halkhabar")
})


let btn = document.querySelector('.btn');
let bulb = document.querySelector('.bulb');
let flag=0
btn.addEventListener("click", () => {
   if(flag==0){
    bulb.style.backgroundColor = 'white';
    flag+=1;
   }else{
    bulb.style.backgroundColor = 'black';
    flag-=1;
   }
});


