import "./signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const navigate=useNavigate()
  const onSelectFile = (e) => {
    setFile(e.target.files[0]);
  };
console.log(file);
 
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      console.log("Form submitted");
    
      const formData = new FormData();
      
        formData.append('image', file);
      
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('password', password);
    
      console.log("formData", formData);
    
      // const formDataObj = Object.fromEntries(formData.entries());
    
      // console.log("formDataObj", formDataObj);
    
      try {
        const response = await axios.post("http://localhost:5000/user/create-user", formData);
        console.log("Response", response);
        alert("signed up successfully");
    
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        navigate("/login-form")
      } catch (error) {
        console.log("Error", error);
      }
    };

  return (
    <>
      <div className="form-container">
        <form className="form"  encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="enter your name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              name="name"
              required={true}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="enter your email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required={true}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="enter your number"
              id="number"
              onChange={(e) => setPhone(e.target.value)}
              name="number"
              required={true}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="create password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required={true}
            ></input>
          </div>
          <div className="form-group">
          <input type="file"  name="uploaded_file"  onChange={onSelectFile} />
          </div>
          <button className="form-submit-btn" type="submit">
            Sign Up
          </button>
          <button className="closing-button" type="button">
            close
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;