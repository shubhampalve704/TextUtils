// import logo from './logo.svg';
import { useState } from "react";
import "./App1.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import Footer from "./Components/Footer";


function App() {
  const [Mode, setMode] = useState("light");
  const [GreenMode, setGreenMode] = useState("light");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#476478";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils -Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils -Light Mode";
    }
  };

  const toggleGreenMode = () => {
    if (GreenMode === "light") {
      setGreenMode("green");
      document.body.style.backgroundColor = "rgb(72 120 71)";
      document.body.style.color = "white";
      showAlert("Green-Dark Mode has been enabled", "success");
      document.title = "TextUtils -Green Mode";
    } else {
      setGreenMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils -Light Mode";
    }
  };
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
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          mode={Mode}
          toggleMode={toggleMode}
          greenMode={GreenMode}
          toggleGreenMode={toggleGreenMode}
        ></Navbar>
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route
              exact path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text Below To Analyze"
                  mode={Mode}
                  greenMode={GreenMode}
                />
              {/* } */}
            {/* /> */}
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
