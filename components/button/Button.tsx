import React from "react";

const Button = ({ type }: { type: "submit" | "reset" | "button" }) => {
  return <button>{type}</button>;
};



export default Button;
