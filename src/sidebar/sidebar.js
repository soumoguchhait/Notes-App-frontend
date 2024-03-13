import { Link } from "react-router-dom";
import "./sidebar.css";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
    const imageUrl = useSelector((state) => state.user.image);
   
  const data = localStorage.getItem("data");
  const obj = JSON.parse(data);
  const [imageLink, setImageLink] = useState(obj?.image);
  const image=imageUrl?imageUrl:imageLink;





  const imageStyle = {
    backgroundImage: `url(${image})`,

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
          
        </div>
      </div>
    </>
  );
};

export default Sidebar;