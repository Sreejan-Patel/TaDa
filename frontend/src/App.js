import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import ToDoList from "./components/users/ToDoList";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ToDoList/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
