import React from "react";
import PropTypes from "prop-types";

function Formulario({ onSubmit, errorMessage }) {
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input1, input2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Ingresa tu nombre"
      />

      <label htmlFor="color">Color favorito:</label>
      <input
        type="text"
        id="color"
        name="color"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Ingresa tu color favorito"
      />
      <button type="submit">Enviar</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}
Formulario.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default Formulario;
