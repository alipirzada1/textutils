import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    // console.log("Upper case was clicked! : " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLowerCaseClick = () => {
    // console.log("Upper case was clicked! : " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearCaseClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCapitalizeCaseClick = () => {
    let wordsArray = text.split(" ");

    let newText = wordsArray
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
    setText(newText);
    props.showAlert("Capitalized first letters!", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("Handle On Change was clicked!");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("new Text");

  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "#042743" }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearCaseClick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeCaseClick}>
          Capitalize Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" || props.mode === "green" ? "white" : "#042743" }}>
        <h1>Your text summary</h1>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          words and {text.replace(/ /g, "").length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
