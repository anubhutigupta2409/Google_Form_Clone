import React from "react";
import FormHeader from "./Components/FormHeader";
import CenterTabs from "./Components/CenterTabs";
import Questions_Form from "./Components/Questions_Form";

function App() {
  return (
    <div className="app">
      <FormHeader/>
      <CenterTabs/>
      <Questions_Form/>
    </div>
  );
}

export default App;

