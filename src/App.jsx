//CSS
import "./styles/App.css";
import "./styles/colors.css";

//Components
import FetchData from "./components/FetchData";
import Context from "./components/Context";

//Context
import ExampleContext from "./Contexts/ExampleContext";

function App() {
  return (
    <>
      <ExampleContext.Provider value="Random Cats">
        <Context />
        <FetchData />
      </ExampleContext.Provider>
    </>
  );
}

export default App;
