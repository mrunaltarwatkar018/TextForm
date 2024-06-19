import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils is Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar title="TextForm" /> */}
      {/* <Navbar /> */}
      {/* <Navbar title="TextForm" aboutText="About TextForm" mode={mode} toggleMode={toggleMode} /> */}

      <Router>
        <div>
          <Navbar
            title="TextForm"
            aboutText="About "
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
          {/* <div className="container my-3"  >
              <TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode} />
              <About /> 
            </div> */}

          <Routes>
            {/* textform  */}
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text to Analyze"
                  mode={mode}
                />
              }
            />

            {/* home  */}
            <Route
              path="/home"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text to Analyze"
                  mode={mode}
                />
              }
            />

            {/* about  */}
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
