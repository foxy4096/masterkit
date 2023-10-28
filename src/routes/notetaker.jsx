import { useState, useEffect } from "react";
import {toast} from 'react-toastify'
const NoteTaker = () => {
  const savedNote = localStorage.getItem("note") || "";

  const [note, setNote] = useState(savedNote);

  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  const clearNote = () => {
    setNote("");
    localStorage.removeItem("note");
  };
  const copyNote = () => {
    navigator.clipboard.writeText(note);
    toast("📝 Note copied to clipboard");
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Note Taker</h1>
      <div className="mb-4">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 dark:bg-gray-800 text-2xl font-mono focus:outline-none"
          rows={15}
          placeholder="Take a note"
        />
        <button onClick={copyNote} className="bg-indigo-500 text-white p-2 mr-3">
          Copy
        </button>
        <button onClick={clearNote} className="bg-red-500 text-white p-2">
          Clear
        </button>
      </div>
    </div>
  );
};

export default NoteTaker;
