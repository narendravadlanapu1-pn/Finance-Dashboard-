import React from "react";
import "./index.css"

const Insights = ({ transactions }) => {
  let totalIncome = 0;
  let totalExpense = 0;
  let categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "income") totalIncome += t.amount;
    else totalExpense += t.amount;

    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  // Find highest spending category
  let topCategory = "";
  let maxAmount = 0;

  for (let cat in categoryMap) {
    if (categoryMap[cat] > maxAmount) {
      maxAmount = categoryMap[cat];
      topCategory = cat;
    }
  }

  return (
    <div
      className="card p-4 mt-5"
      style={{ backgroundColor: "#1e293b", borderRadius: "15px" }}
    >
      <h5 className="text-info mb-3"> <img src="https://res.cloudinary.com/dqcwvoqyh/image/upload/v1775459133/pngtree-bulb-logo-and-symbol-vector-ilustration-template-png-image_4775096_vduhcg.png" alt="insights-logo" className="Insights-logo"/> Insights</h5>

      <ul className="text-light">
        <li>Total Income: ₹ {totalIncome}</li>
        <li>Total Expense: ₹ {totalExpense}</li>

        {topCategory && (
          <li>Highest Spending Category: {topCategory}</li>
        )}

        {totalIncome > totalExpense ? (
          <li className="text-success">
            ✔ You are saving money!
          </li>
        ) : (
          <li className="text-danger">
            ⚠ You are overspending!
          </li>
        )}
      </ul>
    </div>
  );
};

export default Insights;