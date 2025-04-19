import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import api from "@api/axios";
import { Registration } from "@pages/auth/registration";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    api.get("/projects").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
