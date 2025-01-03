import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleReplace = () => {
    if (!findText) {
      alert("Please enter the text to find.");
      return;
    }
    const regex = new RegExp(escapeRegExp(findText), "g");
    setOutputText(inputText.replace(regex, replaceText));
  };

  const escapeRegExp = (text) => {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  return (
    <div className="container">
      <h1>Find and Replace Tool</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="10"
        placeholder="Enter your text here"
      ></textarea>
      <div className="inputs">
        <input
          type="text"
          value={findText}
          onChange={(e) => setFindText(e.target.value)}
          placeholder="Text to find"
        />
        <input
          type="text"
          value={replaceText}
          onChange={(e) => setReplaceText(e.target.value)}
          placeholder="Replacement text"
        />
      </div>
      <button onClick={handleReplace}>Replace</button>
      <h2>Result</h2>
      <textarea rows="10" value={outputText} readOnly></textarea>
    </div>
  );
}

export default App;
