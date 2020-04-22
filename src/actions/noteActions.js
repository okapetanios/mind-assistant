export const FIND_NOTES_FOR_GROUP = "FIND_NOTES_FOR_GROUP";
export const findNotesForGroup = (notes) => ({
    type: FIND_NOTES_FOR_GROUP,
    notes: notes
});

export const CREATE_NOTE = "CREATE_NOTE";
export const createNote = (note) => ({
    type: CREATE_NOTE,
    note: note
});

export const DELETE_NOTE = "DELETE_NOTE";
export const deleteNote = (noteId) => ({
    type: DELETE_NOTE,
    noteId: noteId
});

export const UPDATE_NOTE = "UPDATE_NOTE";
export const updateNote = (noteId, note) => ({
    type: UPDATE_NOTE,
    noteId: noteId,
    note: note
});

export const FIND_NOTE_BY_ID = "FIND_NOTE_BY_ID";
export const findNote = (note) => ({
    type: FIND_NOTE_BY_ID,
    NOTE: note
});

export const FIND_ALL_NOTES = "FIND_ALL_NOTES";
export const findAllNotes = (notes) => ({
    type: FIND_ALL_NOTES,
    notes: notes
});

export const SEARCH_NOTES = "SEARCH_NOTES";
export const searchNotes = (notes) => ({
    type: SEARCH_NOTES,
    notes: notes
});