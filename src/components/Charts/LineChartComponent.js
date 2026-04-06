import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineChartComponent = () => {
  const data = [
    { month: "Jan", balance: 1000 },
    { month: "Feb", balance: 2000 },
    { month: "Mar", balance: 1500 },
    { month: "Apr", balance: 3000 },
  ];

  return (
    <div className="card p-3" style={{ backgroundColor: "#1e293b" }}>
      <h6 className="text-light mb-3">Balance Trend</h6>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#38bdf8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;