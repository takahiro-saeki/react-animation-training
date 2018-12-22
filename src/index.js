import React, { useState } from "react";
import { render } from "react-dom";

const Main = () => {
  const [value, setValue] = useState(0);
  return <div>value is: {value}</div>;
};

render(<Main />, document.getElementById("app"));
