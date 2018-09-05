// document.querySelector('textarea').addEventListener('keydown', autosize);
document.getElementById('on-button-container').addEventListener('click', createDom);


// -------FUNCTION TO FIT INPUT TEXTAREA TO AMOUNT OF INPUTTED TEXT------
function autosize(){
  let el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding-top:5';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
// --------FUCNTION TO DRAG NOTE onmousedown-onmouseup-------
// let note = document.querySelector('.container');
// note.onmousedown = function(event) {

//   let shiftX = event.clientX - note.getBoundingClientRect().left;
//   let shiftY = event.clientY - note.getBoundingClientRect().top;

//   moveAt(event.pageX, event.pageY);

//   // centers the note at (pageX, pageY) coordinates
//   function moveAt(pageX, pageY) {
//     note.style.left = pageX - shiftX + 'px';
//     note.style.top = pageY - shiftY + 'px';
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   // move the note on mousemove
//   document.addEventListener('mousemove', onMouseMove);

//   // leave note, remove unneeded handlers
//   note.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//     note.onmouseup = null;
//   };

// };

// note.ondragstart = function() {
//   return false;
// };
// // --------FUNCTION TO REMOVE NOTE ELEMENT--------
// let closeButton = document.querySelector('.close-note');
// closeButton.addEventListener('click', closeNote);

// function closeNote(event) {
//   document.body.removeChild(note);
// }

// ---------FUNCTION TO CREATE NOTE ELEMENT---------

let string = '<div class="container"><div class="container-header">' +
        '<input class="note-header" type="text" placeholder="Name your note">' +
        '<div class="close-note"> X </div> </div><div class="container-body">' +
        '<textarea class="note-body" type="text" placeholder="Your note is here:"></textarea></div></div>';

function createDom() {
  let parser = new DOMParser();
  let html = parser.parseFromString(string, 'text/html');
  document.body.appendChild(html.body.firstChild); 

  
}     
   