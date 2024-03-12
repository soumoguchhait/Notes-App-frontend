import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const data = localStorage.getItem("data");
  const obj = JSON.parse(data);
  const imageUrl = obj?.image;

  const imageStyle = {
    background: `url(${imageUrl})`,

    backgroundSize:"cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="sidebar-container">
        <h1 className="sidebar-heading">Notes+</h1>
        <Link to="/new-note">
          <button className="addNoteBtn">Add New Note</button>
        </Link>
        <Link to="/login-form">
          <button className="LoginBtn">Login</button>
        </Link>
        <div className="image-container" style={imageStyle}>
          {}
        </div>
      </div>
    </>
  );
};

export default Sidebar;