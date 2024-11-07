import React, { useState } from "react";
import Formulario from "./Formulario";
import Card from "./Card";

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (input1, input2) => {
    if (input1.length >= 3 && !input1.startsWith(" ") && input2.length >= 6) {
      setSubmittedData({ name: input1, color: input2 });
      setErrorMessage("");
    } else {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setSubmittedData(null);
    }
  };

  return (
    <div className="App">
      <h1>Formulario</h1>
      <Formulario onSubmit={handleFormSubmit} errorMessage={errorMessage} />
      {submittedData && (
        <Card name={submittedData.name} color={submittedData.color} />
      )}
    </div>
  );
}

export default App;
