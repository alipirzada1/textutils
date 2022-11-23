import React from "react";

function Mode(props) {
  const changeColorMode = () => {};

  return (
    <div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <TextForm mode={mode} />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Enable GreenMode
        </label>
      </div>
    </div>
  );
}

export default Mode;
