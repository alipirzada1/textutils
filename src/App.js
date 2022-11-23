import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  const changeColorMode = () => {
    if (color === "light") {
      setColor("green");
      document.body.style.backgroundColor = "green";
      showAlert("Green mode has been enabled", "success");
    } else if (color === "green") {
      setColor("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  // return (
  //   <>
  //     <BrowserRouter>
  //       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} color={color} changeColorMode={changeColorMode} />
  //       <Alert alert={alert} />
  //       <div className="container my-3">
  //         <Routes>
  //           <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} color={color} />} />

  //           {/* <Route path="about" element={} /> */}
  //           <About />
  //         </Routes>
  //       </div>
  //     </BrowserRouter>
  //   </>
  // );

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} color={color} changeColorMode={changeColorMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode} color={color} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
