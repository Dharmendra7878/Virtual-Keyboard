import React, { useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "./App.css";


import "react-simple-keyboard/build/css/index.css";

const App = () => {
  const [layoutName, setLayoutName] = useState("default");
  const [input, setInput] = useState("");
  const keyboardRef = useRef(null);

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const handleShift = () => {
    setLayoutName((prevLayout) => (prevLayout === "default" ? "shift" : "default"));
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    if (keyboardRef.current) {
      keyboardRef.current.setInput(input);
    }
  };

  return (
  <div className="keyboard-app">
    <h1>Your Virtual Keyboard</h1>
    <input
      value={input}
      placeholder={"Tap on the virtual keyboard to start"}
      onChange={onChangeInput}
    />
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  </div>
);

};

export default App