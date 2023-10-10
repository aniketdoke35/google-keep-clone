const  addButton = document.getElementById('add');


const addnewNotes = (text = '') =>{
 const note =  document.createElement('div');
  note.classList.add('note');

  const htmlData = `
  <div class="note1">
  <button class="edit"><i class="fas fa-pen"></i></button>
  <button class="delete"><i class="fas fa-trash-alt"></i></button>
  <div class="main ${text ? "" : "hidden"} ">
      <textarea class=" ${text ? "hidden" : ""} " rows="7" cols="35" placeholder="Enter your notes..."></textarea>
  </div> `;

  note.insertAdjacentHTML('afterbegin',htmlData);



  // getting the refenceses
const Buttondel = note.querySelector('.delete');
const Buttonedit = note.querySelector('.edit');
const mainDiv = note.querySelector('.main');
const textarea = note.querySelector('textarea');         

//deleting node
Buttondel.addEventListener('click',()=>{
    note.remove();
})

//toggle using edit button

// textarea.value = text;
// mainDiv.innerHTML = text;

// Buttonedit.addEventListener('click',()=>{
//   mainDiv.classList.toggle('hidden');
//   textarea.classList.toggle('hidden');
// });


// textarea.addEventListener('chage',(event)=>{(
//      Buttondel.addEventListener

// )};

// textarea.addEventListener('change',(event)=>{
//     const value = event.target.value;
//     console.log(value);
// })

  document.body.appendChild(note);
}



addButton.addEventListener('click', () => addnewNotes() );