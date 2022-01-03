const colors = ['lightblue', 'lightsalmon', 'lightyellow', 'lightgreen', 'lightgrey', 'crimson', 'pink'];
const div = document.querySelector('div');
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
       document.querySelector('body').style.backgroundColor = colors[rand];
       document.querySelector('#name-color').innerHTML = colors[rand];
       const color = document.querySelectorAll('.colors');
       color[rand].classList.add('active');
       color[rand].innerHTML++;
       color[rand].style.transform=' rotateY(360deg)';
   
  }
colors.forEach(color => {
  const btn = document.createElement('button');
  const conter = document.createElement('p');
  conter.classList.add('conter')
  div.appendChild(btn);
  div.appendChild(conter);
  btn.style.backgroundColor = color;
  btn.classList.add('colors');
  conter.innerHTML="conter"
});
    
    
    


    