function navigateToMainPage() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const noteTitle = localStorage.getItem('editNoteTitle');
    const noteContent = localStorage.getItem('editNoteContent');
    document.getElementById('editNoteTitle').value = noteTitle;
    document.getElementById('editNoteContent').value = noteContent;
});

function updateNote() {
    const updatedTitle = document.getElementById('editNoteTitle').value;
    const updatedContent = document.getElementById('editNoteContent').value;
    const originalTitle = localStorage.getItem('editNoteTitle');
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    if (updatedTitle) {
        // Find the index of the note to be updated
        const noteIndex = notes.findIndex(note => note.title === originalTitle);

        // Update the note
        if (noteIndex !== -1) {
            notes[noteIndex].title = updatedTitle;
            notes[noteIndex].content = updatedContent;
        }

        // Save updated notes array to local storage
        localStorage.setItem('notes', JSON.stringify(notes));

        // Clear edit note storage
        localStorage.removeItem('editNoteTitle');
        localStorage.removeItem('editNoteContent');

        // Navigate back to the main page
        navigateToMainPage();
    } else {
        alert("Please enter a note title.");
    }
}

function deleteNote() {
    const originalTitle = localStorage.getItem('editNoteTitle');
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    // Find the index of the note to be deleted
    const noteIndex = notes.findIndex(note => note.title === originalTitle);

    // Delete the note if it exists
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
    }

    // Save updated notes array to local storage
    localStorage.setItem('notes', JSON.stringify(notes));

    // Clear edit note storage
    localStorage.removeItem('editNoteTitle');
    localStorage.removeItem('editNoteContent');

    // Navigate back to the main page
    navigateToMainPage();
}
