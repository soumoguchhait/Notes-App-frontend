import React, { useEffect, useState } from "react";
import axios from "axios";
import "./new-note.css"
import { useNavigate } from "react-router-dom";

const AddNote = () => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [error, setError] = useState("");
    const newNote = {
      title: title,
      info: note,
    };
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/notes/create-note", newNote);
        alert("Note added successfully!");
        navigate("/"); // Redirect to the home page after successful submission
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    };
  
    useEffect(() => {
      if (error) {
        alert("Error: " + error);
        setError("");
      } else {
        // Clear the inputs when the component is re-rendered
        setTitle("");
        setNote("");
      }
    }, [error]);
  
    return (
      <>
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">TITLE</label>
              <input
                required
                name="title"
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="note">NOTE</label>
              <textarea
                required
                cols="50"
                rows="20"
                id="note"
                name="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
            <button className="closing-button" onClick={() => navigate("/")}>
            Close
          </button>
          </form>
         
        </div>
      </>
    );
  };
  
  export default AddNote;