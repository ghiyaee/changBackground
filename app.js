const colors = ['lightblue', 'lightsalmon', 'lightyellow', 'lightgreen', 'lightgrey', 'crimson', 'pink'];
const news = document.querySelectorAll('.colors');
const body = document.querySelector('body'); 
const stopRandom=  setInterval(chang,5000)
document.body.onload = function(){
    ranDomShow();
}
function chang() {
         ranDomShow();     
}
function ranDomShow() {
    const rand = Math.floor(Math.random() * colors.length);
    console.log(rand,colors);
       document.querySelector('body').style.backgroundColor = colors[rand];
       document.querySelector('#name-color').innerHTML = colors[rand];
       const color = document.querySelectorAll('.colors');
       color[rand+1].classList.add('active');
   color[rand+1].innerHTML++;
   
  }
colors.forEach(p => {
    const btn = document.createElement('button');
    document.querySelector('.colors').appendChild(btn);
    btn.style.backgroundColor = p;
    btn.classList.add('colors');
});
    
    
    


    