import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PieChartComponent = () => {
  const data = [
    { name: "Food", value: 400 },
    { name: "Shopping", value: 300 },
    { name: "Travel", value: 300 },
  ];

  const COLORS = ["#ef4444", "#38bdf8", "#22c55e"];

  return (
    <div className="card p-3" style={{ backgroundColor: "#1e293b" }}>
      <h6 className="text-light mb-3">Spending Breakdown</h6>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;