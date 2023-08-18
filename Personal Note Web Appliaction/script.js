const notesList = document.getElementById('notes-list');
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');

function addNote() {
    const title = noteTitleInput.value;
    const content = noteContentInput.value;

    // Create a new note element
    const noteElement = document.createElement('li');
    noteElement.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
        <button onclick="editNote(this)">Edit</button>
        <button onclick="deleteNote(this)">Delete</button>
    `;

    // Append the note to the list
    notesList.appendChild(noteElement);

    // Clear input fields
    noteTitleInput.value = '';
    noteContentInput.value = '';
}

function editNote(button) {
    const noteElement = button.parentElement;
    const title = noteElement.querySelector('h2').textContent;
    const content = noteElement.querySelector('p').textContent;

    noteTitleInput.value = title;
    noteContentInput.value = content;

    notesList.removeChild(noteElement);
}

function deleteNote(button) {
    const noteElement = button.parentElement;
    notesList.removeChild(noteElement);
}
