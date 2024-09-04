import React from "react";

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <p className="text-lg font-semibold text-gray-800 mb-2">{note.title}</p>
            <p className="text-gray-600 mb-2">{note.content}</p>
            <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>
            <button
                className="bg-red-500 text-white font-bold py-1 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={() => onDelete(note.id)}
            >
                Delete
            </button>
        </div>

    );
}

export default Note