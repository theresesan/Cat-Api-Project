import { useContext } from "react";

// Contexts
import ExampleContext from "../Contexts/ExampleContext";

function Context() {
  const MainText = useContext(ExampleContext);

  return (
    <div>
      <h1>{MainText}</h1>
    </div>
  );
}

export default Context;
