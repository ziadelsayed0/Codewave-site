import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/note/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/note/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/note/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="flex justify-center items-start mt-10">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Notes</h2>
                    {notes.map((note) => (
                        <Note note={note} onDelete={deleteNote} key={note.id} />
                    ))}
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Create a Note</h2>
                    <form onSubmit={createNote} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-gray-600 font-medium">Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-gray-600 font-medium">Content:</label>
                            <textarea
                                id="content"
                                name="content"
                                required
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Submit"
                                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;