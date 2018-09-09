document.getElementById('on-button-container').addEventListener('click', () => createDom("","")
);

window.onload = () => loadNotes();


// -------FUNCTION TO FIT INPUT TEXTAREA TO AMOUNT OF INPUTTED TEXT------
function autosize(){
  const el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding-top:5';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

// ---------FUNCTION TO CREATE NOTE ELEMENT---------

function createDom(noteName, noteContent) {
  const allNotesContainer = document.getElementById('all-notes-container');
  const note = document.createElement('div');
  note.setAttribute('class', 'container');

  note.innerHTML = `<div class="container-header">
                      <input class="note-header" type="text" placeholder="Name your note" value="${noteName}">
                    <div class="close-note"> &times; </div>
                    </div>
                    <div class="container-body">
                      <textarea rows="9" class="note-body" type="text" placeholder="Your note is here:">${noteContent}</textarea>
                    </div>`;
  
  allNotesContainer.appendChild(note);

  const noteClosers = document.getElementsByClassName("close-note");
  for(let i = 0; i < noteClosers.length; i++) {
    noteClosers[i].addEventListener('click', closeNote);
  }
  const noteAreas = document.getElementsByTagName('textarea');
  for(let i = 0; i < noteAreas.length; i++) {
    noteAreas[i].addEventListener('keydown', autosize);  
  }

  // const closers = Array.from(document.getElementsByClassName('close-note'));
  // closers.forEach(element => {
  //   addEventListener('click', closeNote);
  // });
  this.addEventListener('beforeunload', saveNotes);
}

function saveNotes() {
  localStorage.clear();
  const noteNames = document.getElementsByClassName('note-header');
  const noteContents = document.getElementsByClassName('note-body');

  for (let i=0; i<noteNames.length; i++) {
    localStorage.setItem(noteNames[i].value, noteContents[i].value);
  }
}

function loadNotes() {
  for (let i=0; i<localStorage.length; i++) {
    if (localStorage.key(i) === "" && localStorage.getItem(localStorage.key(i)) === "") continue;
    createDom(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
  }
}

function closeNote() {
  const header = this.parentNode.getElementsByTagName('input')[0].innerHTML;
  localStorage.removeItem(header);
  this.parentNode.parentNode.remove();
}