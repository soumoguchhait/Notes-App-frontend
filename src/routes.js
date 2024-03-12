import { Route, Routes } from "react-router-dom";
import AddNote from "./new-note/new-note";
import Section from "./notes-section/notes-section";
import Login from "./Login/login";
import Signup from "./signup/signup";

const Navigation = () => {
  return (
    <Routes>
      
        <Route index element={<Section/>}></Route>
        <Route path="/new-note" element={<AddNote />}></Route>
        <Route path="/login-form" element={<Login />}></Route>
        <Route path="/signup-form" element={<Signup />}></Route>


    </Routes>
  );
};

export default Navigation;