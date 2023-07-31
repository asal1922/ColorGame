let sqr=document.getElementsByClassName('sqr')
let playgame=document.getElementById('game')
let body=document.getElementById('body')
let counter=document.querySelector('span')
let count=0;
let chackcounter=true;
playgame.addEventListener('click',function(){
  playgame.innerHTML='playgame'
  body.style.backgroundColor='gray';
let x=Math.floor(Math.random()*100)
let y=Math.floor(Math.random()*100)
let z=Math.floor(Math.random()*100)
for(let i=0;i<sqr.length;i++){
    sqr[i].style. backgroundColor='rgb'+'('+ x +','+ y +','+ z +')';
}
let randomi=Math.floor(Math.random()*8)
x=x-10;
y=y-20
  let diferentsqr='rgb'+'('+ x +','+ y +','+ z +')';
  sqr[randomi].style.backgroundColor=diferentsqr;
  let difbtn= sqr[randomi]
  chackcounter=true
difbtn.addEventListener('click',function(){
    let win=document.createElement('p')
    playgame.innerHTML='winner'
    body.style.backgroundColor='green'
    if(chackcounter){
      count++;
      counter.innerHTML=count
      chackcounter=false;
    }
  

  })


})

