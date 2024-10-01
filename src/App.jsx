import { useState } from "react";
import "./App.css";
import Experience from "./components/experience/experience";
import Overview from "./components/overview/overview";
import ButtonGroup from "./components/buttonGroup/buttongGroup";
import Contact from "./components/contact/contact";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [show, setShow] = useState(1);

  return (
    <div className="container">
      <h1 id="title">Husain Rangwala</h1>

      <div className="buttonGroup">
        <ButtonGroup setShow={setShow} />
      </div>
      {show == 1 ? <Overview /> : <></>}
      {show == 2 ? <Experience /> : <></>}
      <Sidebar />
      <Contact />
    </div>
  );
}

export default App;
