import React from "react";

const GoogleButtonForAuth = ({
  children,
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <div>
      <button type={type} onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
};

export default GoogleButtonForAuth;
