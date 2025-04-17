import Home from "./components/Home";
import Signup from "./components/Signup";
import Habitos from "./components/Habitos";
import Today from "./components/Today";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(user);

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <UserContext.Provider value={[token, setToken]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/habitos" element={<Habitos />} />
              <Route path="/hoje" element={<Today />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </UserContext.Provider>
    </>
  )
}
