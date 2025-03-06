import React from "react";

const AddWaterBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: "10px 20px", fontSize: "16px" }}
    >
      Додати воду
    </button>
  );
};

export default AddWaterBtn;
