function navigateToMainPage() {
    window.location.href = "index.html";
}

function saveNote() {
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;

    if (title) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ title, content });
        localStorage.setItem('notes', JSON.stringify(notes));
        navigateToMainPage();
    } else {
        alert("Please enter a note title.");
    }
}

function deleteNote() {
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
}
