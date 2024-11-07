import React from "react";
import PropTypes from 'prop-types';

function Card({ name, color }) {
  return (
    <div className="card">
      <h2>Datos Ingresados:</h2>
      <p>Nombre: {name}</p>
      <p>Color Favorito: {color}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Card;
