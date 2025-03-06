import React from "react";

const WaterModal = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <h2>Додати воду</h2>
      <input type="number" placeholder="Кількість води (л)" />
      <button onClick={onClose}>Закрити</button>
      <button>Зберегти</button>
    </div>
  );
};

export default WaterModal;
