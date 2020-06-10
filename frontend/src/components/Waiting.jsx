import React from "react";
import { WaitImg, DivWaiting } from "../css/global";

//Return implicito
export default () => {
  return (
    <DivWaiting className="waiting">
      <p>Por favor espere...</p>
      <WaitImg />
    </DivWaiting>
  );
};
