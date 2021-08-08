import React from "react";
import Navbar from "../src/Navbar/navbar";
import Body from "../src/Body/body";
import Footer from "../src/Footer/footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <Body />
        <Footer />
      </div> 
    );
  }
}

export default App;
