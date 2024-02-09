import React from "react";
import { useFormContext } from "../../context/Form";

const NoteTextArea = () => {
  const { handleNewNote, note } = useFormContext();
  return (
    <div>
      <label>Notas</label>
      <textarea value={note} onChange={handleNewNote}></textarea>
    </div>
  );
};

export default NoteTextArea;
