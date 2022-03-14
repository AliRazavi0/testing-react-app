import React from "react";

const App = ({ name }) => {
  return <div>Hello {name ? name : ""}</div>;
};

export default App;
