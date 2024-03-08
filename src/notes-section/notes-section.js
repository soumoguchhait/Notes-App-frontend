import React, { useEffect, useState } from "react";
import axios from "axios";
import "./notes-section.css";
import { FaEdit, FaTrash ,FaEye} from "react-icons/fa";
import { format } from "date-fns";
const Section = () => {
  const [credentials, setCredentials] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editNote, setEditNote] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditNote(credentials[index]);
  };

  const handleShow = (index) => {
    setSelectedNoteIndex(index === selectedNoteIndex ? null : index);
  };
  

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  };

  const handleUpdate = async (updatedNote) => {
    try {
      await axios.patch(`http://localhost:5000/notes/update-note/${credentials[editIndex]._id}`, updatedNote);
      const newCredentials = [...credentials];
      newCredentials[editIndex] = updatedNote;
      setCredentials(newCredentials);
      setEditIndex(null);
      setEditNote(null);
    } catch (error) {
      console.log(error);
        console.log(credentials)
    }
  };

  const handleDelete = async (index) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await axios.delete(`http://localhost:5000/notes/delete-note/${credentials[index]._id}`);
        setCredentials(credentials.filter((note, i) => i !== index));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/notes/get-note");
      setCredentials(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const search = (note) => {
    return note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.info.toLowerCase().includes(searchTerm.toLowerCase())
      ? true
      : false;
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredNotes = credentials.filter(search);

  return (
    <>
      {editIndex !== null ? (
        <form className="colorful-form">
          <div className="form-group">
            <label className="form-label" htmlFor="name">Title:</label>
            <input
              required=""
              className="form-input"
              type="text"
              defaultValue={editNote.title}
              onChange={(e) => setEditNote({ ...editNote, title: e.target.value })}
            ></input>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Note:</label>
            <textarea
              required=""
              className="form-input"
              name="message"
              id="message"
              defaultValue={editNote.info}
              
              onChange={(e) => setEditNote({ ...editNote, info: e.target.value })}
              
            ></textarea>
          </div>

          <button className="form-button" type="button" onClick={() => handleUpdate(editNote)}>
            Submit
          </button>
        </form>
      ) : (
        <div className="main-container">
          <input
            type="search"
            placeholder="Search Notes"
            className="search-bar"
            onChange={(e) => debounce(handleSearch, 300)(e.target.value)}
            aria-label="Search notes"
          ></input>
          <div className="card-container">
            {filteredNotes.map((item, index) => {
              return (
                <>
                  <div className={`main-container ${selectedNoteIndex === index ? 'expanded' : 'cookieCard'}`} key={index}>
                        <div className="icon-container">
                        <FaEye className="view-icon" onClick={() => handleShow(index)} aria-label="view note" />
                            <FaEdit className="edit-icon" onClick={() => handleEdit(index)} aria-label="Edit note"/>
                            <FaTrash className="delete-icon" onClick={() => handleDelete(index)} aria-label="Delete note" />
                        </div>
                <p className="cookieHeading">{item.title}</p>
                <p className="cookieDescription">{item.info} </p>
                <button className="acceptButton">
                {format(new Date(item.createdAt), "MMMM dd, yyyy")}
                </button>
                </div>
            </>
          );
        })}
      </div>
    </div>
  )}
  
</>
  )      
    }   
export default Section;