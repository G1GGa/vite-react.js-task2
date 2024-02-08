import React, { useState } from "react";
import "../Styles/main.scss";
import Star from "./Star";
import Numbers from "./Numbers";
import Button from "./Button";
import Thanks from "./Thanks";

const App = () => {
  const [active, setActive] = useState(false);
  const [newState, setNewState] = useState("");
  const onSubmit = () => {
    setActive(newState);
  };

  return (
    <>
      <div className="desktop">
        {!active && (
          <div className="main-content">
            <Star />
            <div className="text">
              <h2 className="title">How did we do?</h2>
              <p className="p-text">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>

            <Numbers active={newState} setActive={setNewState} />

            <Button click={onSubmit} name="SUBMIT" />
          </div>
        )}
        {active && <Thanks active={active} />}
      </div>
    </>
  );
};

export default App;
