// Recuperer les KeyCode CAD les numero des touches du clavier 

function playMusic(e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  
    if(!audio){return}; //Stop the function from running return; 
    
    audio.currentTime = 0; //rewind to the start
    audio.play();
      
    key.classList.add("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
  if(e.propertyName !== 'transform') return; // Skip it if it's not a tranform
  this.classList.remove('playing');
}




window.addEventListener('keydown', playMusic);
