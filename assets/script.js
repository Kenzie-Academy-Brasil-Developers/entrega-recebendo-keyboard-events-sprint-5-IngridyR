const body = document.querySelector('body')
const div  = document.createElement('div')
div.id     = "box"

const img  = document.createElement('img')
img.src    = "./assets/among-us-pet.png" 

div.appendChild(img)
body.appendChild(div)



let boxTop = 200;
let boxLeft = 200;


document.addEventListener('keydown', (event) => {
    
  const keyEvent = event.key;
  console.log(keyEvent)
  
  if(keyEvent === 'ArrowDown'){
    boxTop += 10
  }
  if(keyEvent === 'ArrowUp'){
    boxTop -= 10
  }

  if(keyEvent === 'ArrowRight'){
    boxLeft += 10
  }
  if(keyEvent === 'ArrowLeft'){
    boxLeft -= 10
  }


  document.getElementById("box").style.top = boxTop + "px";
  document.getElementById("box").style.left = boxLeft + "px";
});

  //key : ArrowDown seta para baixo
  //key : ArrowUp seta para cima
  //key : ArrowRight seta para direita
  //key : ArrowLeft seta para esquerda
