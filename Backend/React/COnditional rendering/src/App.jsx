import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [form, setform] = useState({
    email: "",
    phone: "",
  });

  const handlechange = (e) => {
    setform({...form, [e.target.name]:e.target.value});
  };

  return (
    <>
      <input
        type="text"
        name="email"
        id=""
        value={form.email}
        onChange={handlechange}
      />
      <input
        type="text"
        name="phone"
        id=""
        value={form.phone}
        onChange={handlechange}
      />
    </>
  );
}

export default App;
