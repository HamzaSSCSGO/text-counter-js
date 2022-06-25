const myTextArea= document.getElementById('my-textarea');
const remainingCharsText= document.getElementById('my-textarea-remaining-chars');

const MAX_CHARS=250;

myTextArea.addEventListener('input', ()=>{
    const remaining = MAX_CHARS - myTextArea.value.length;
    const color = remaining < MAX_CHARS * 0.1 ? 'red' : null;

    remainingCharsText.textContent = `${remaining} characters remaining`;
    remainingCharsText.style.color = color;


});