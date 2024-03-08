import { Link } from "react-router-dom";
import "./sidebar.css"

const Sidebar=()=>{
    return(
        <>
        <div className="sidebar-container">
            <h1 className="sidebar-heading">Notes+</h1>
            <Link to="/new-note"> <button className="addNoteBtn">Add New Note</button></Link>
        </div>
        </>
    )
};
export default Sidebar;