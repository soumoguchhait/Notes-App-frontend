import { Route, Routes } from "react-router-dom";
import AddNote from "./new-note/new-note";
import Section from "./notes-section/notes-section";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/new-note" element={<AddNote />}></Route>
        <Route index element={<Section/>}></Route>
    </Routes>
  );
};

export default Navigation;