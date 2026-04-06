import React from "react";

const SummaryCard = ({ title, amount, type }) => {
  const getColor = () => {
    if (type === "income") return "text-success";
    if (type === "expense") return "text-danger";
    return "text-info";
  };

  return (
    <div
      className="card p-3 shadow"
      style={{ backgroundColor: "#1e293b", borderRadius: "15px" }}
    >
      <h6 className="text-secondary">{title}</h6>
      <h3 className={`fw-bold ${getColor()}`}>₹ {amount}</h3>
    </div>
  );
};

export default SummaryCard;