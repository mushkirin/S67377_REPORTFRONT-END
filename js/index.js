document.addEventListener("DOMContentLoaded", onDocumentReady, false);

function onDocumentReady() {
    displayNotes();
}

function navigateToAddNote() {
    window.location.href = "add_note.html";
}

function navigateToEditNote(title, content) {
    localStorage.setItem('editNoteTitle', title);
    localStorage.setItem('editNoteContent', content);
    window.location.href = "edit_note.html";
}

function displayNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const notesContainer = document.getElementById('notes');
    notesContainer.innerHTML = '';

    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <img src="img/note.png" alt="Note Icon">
            <div class="note-info" onclick="navigateToEditNote('${note.title}', '${note.content}')">
                <h3>${note.title}</h3>
            </div>
        `;
        notesContainer.appendChild(noteElement);
    });
}

function searchNotes() {
    const query = document.getElementById('search').value.toLowerCase();
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const notesContainer = document.getElementById('notes');
    notesContainer.innerHTML = '';

    notes
        .filter(note => note.title.toLowerCase().includes(query))
        .forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.innerHTML = `
                <img src="img/note.png" alt="Note Icon">
                <div class="note-info" onclick="navigateToEditNote('${note.title}', '${note.content}')">
                    <h3>${note.title}</h3>
                </div>
            `;
            notesContainer.appendChild(noteElement);
        });
}
