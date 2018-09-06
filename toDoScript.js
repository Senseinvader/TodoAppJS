document.getElementById('on-button-container').addEventListener('click', function() {
  createDom("","");
});


// -------FUNCTION TO FIT INPUT TEXTAREA TO AMOUNT OF INPUTTED TEXT------
function autosize(){
  let el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding-top:5';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

// --------FUNCTION TO REMOVE NOTE ELEMENT--------

function closeNote(event) {
  this.parentNode.parentNode.remove();
}

// ---------FUNCTION TO CREATE NOTE ELEMENT---------

function createDom(noteName, noteContents) {
  let allNotesContainer = document.getElementById('all-notes-container');
  let note = document.createElement('div');
  note.setAttribute('class', 'container');

  note.innerHTML = `<div class="container-header">
                  <input class="note-header" type="text" placeholder="Name your note" value="${noteName}">
                  <div class="close-note"> X </div>
                </div>
                <div class="container-body">
                  <textarea class="note-body" type="text" placeholder="Your note is here:">${noteContents}</textarea>
                </div>`;
  
  allNotesContainer.appendChild(note);

  let noteClosers = document.getElementsByClassName("close-note");
  for(let i = 0; i < noteClosers.length; i++) {
    noteClosers[i].addEventListener('click', closeNote);
  }
  let noteAreas = document.getElementsByTagName('textarea');
  for(let i = 0; i < noteAreas.length; i++) {
    noteAreas[i].addEventListener('keydown', autosize);
  }
  // note.getElementsByTagName('textarea').addEventListener('keydown', autosize);
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
   