document.querySelector('textarea').addEventListener('keydown', autosize);


function autosize(){
  let el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding-top:5';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

let note = document.querySelector('.container');
note.onmousedown = function(event) {

  let shiftX = event.clientX - note.getBoundingClientRect().left;
  let shiftY = event.clientY - note.getBoundingClientRect().top;

  moveAt(event.pageX, event.pageY);

  // centers the note at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    note.style.left = pageX - shiftX + 'px';
    note.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the note on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // leave note, remove unneeded handlers
  note.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    note.onmouseup = null;
  };

};

note.ondragstart = function() {
  return false;
};