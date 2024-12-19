
import "./css/App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RefreshHandler from "./RefreshHandler";
import { useState } from "react";
import About from "./pages/About";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  }

  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<PrivateRoute element = {<Main />} />} />
        <Route path="/home/about" element={<PrivateRoute element = {<About />} />} />

      </Routes>
    </div>
  );
}

export default App;
