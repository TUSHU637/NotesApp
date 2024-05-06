let addBtn=document.querySelector(".addButton");
let container=document.querySelector(".container");

addBtn.addEventListener("click",(e)=>{
    createNoteBox();
    saveNotes();
    
})
function saveNotes(){
let allNotes=document.querySelectorAll(".noteBox textarea");
let data=[];
allNotes.forEach((notes)=>{
    data.push(notes.value);
})
if(data.length===0){
    localStorage.removeItem("note");
}
else{
localStorage.setItem("note",JSON.stringify(data));
}
}
function createNoteBox(text=""){
    
    let newNoteBox=document.createElement("div");
    newNoteBox.setAttribute("class","noteBox");
    newNoteBox.innerHTML= `
    <div class="tools">
        <div class="save">
            <span class="save material-icons">
                save
             </span>
        </div>
        <div class="delete"><span class="del material-icons">
            delete
            </span></div>
    </div>
    <textarea spellcheck="false" placeholder="write your notes...." class="text-area">${text}</textarea>
   
`;

container.appendChild(newNoteBox);

newNoteBox.querySelector(".del").addEventListener("click",(e)=>{
    newNoteBox.remove();
    saveNotes();
})
newNoteBox.querySelector(".save").addEventListener("click",(e)=>{
    saveNotes();
})
newNoteBox.querySelector("textarea").addEventListener("focusout",(e)=>{
    saveNotes();
})
}

//anonymous functions are self-invoking or self-executing, meaning they are called 
//immediately after being declared. To call an anonymous function, you can use
// brackets() after the function declaration.
//this will acts as a page refreshing function as it run after each page refresh as page is refresh ...again html is load & first this function is call in js file automaticaaly
(
function(){
   let lsNote=JSON.parse(localStorage.getItem("note"));
   if(lsNote===null){
    createNoteBox();
   }
   else{
   lsNote.forEach((item)=>{
    createNoteBox(item);
    saveNotes();
   })
   
   }
}()
)