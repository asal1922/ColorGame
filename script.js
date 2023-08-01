let sqr=document.getElementsByClassName('sqr')
let playgame=document.getElementById('game')
let body=document.getElementById('body')
let counter=document.querySelector('span')
let count=0;
let checkcounter=true;
let input1=document.getElementById('input')

playgame.addEventListener('click',function(){
  input1.value=''
  playgame.innerHTML='playgame'
  body.style.backgroundColor='gray';
let x=Math.floor(Math.random()*100)
let y=Math.floor(Math.random()*100)
let z=Math.floor(Math.random()*100)
for(let i=0;i<sqr.length;i++){
    sqr[i].style. backgroundColor='rgb'+'('+ x +','+ y +','+ z +')';
}

x=x-10;
y=y-20;
  let diferentsqr='rgb'+'('+ x +','+ y +','+ z +')';
  let randomi=Math.floor(Math.random()*8)

  console.log(randomi)
  sqr[randomi].style.backgroundColor=diferentsqr;
  let differentbtn= sqr[randomi]
  checkcounter=true;
  input1.addEventListener('keydown',function(event){
    if(event.keyCode===13){
    if(Number(input1.value)===randomi){
      playgame.innerHTML='winner'
      body.style.backgroundColor='green'
      if(checkcounter){
        count++;
        counter.innerHTML=count
        checkcounter=false;
      }
      console.log(randomi)
    }
    else   {
      playgame.innerHTML='PlayAgain!!!'
      body.style.backgroundColor='red'
    } 
  }
  })
 
  /* sqr[randomi].addEventListener('click',function(){

    playgame.innerHTML='winner'
    body.style.backgroundColor='green'
    if(checkcounter){
      count++;
      counter.innerHTML=count
      checkcounter=false;
    }
    console.log(randomi)
 
}) */
})
