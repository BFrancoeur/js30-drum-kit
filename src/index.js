function playSound(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stops function when a wrong key is pressed
    audio.currentTime = 0; // 'rewinds' sound to beginning
    audio.play();
    key.classList.add("playing");
  }
  
  function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip if not a CSS transform
    this.classList.remove("playing");
  }
  
  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  
  window.addEventListener("keydown", playSound);
  