import React from "react";
import SummaryCard from "../SummaryCard";
import LineChartComponent from "../Charts/LineChartComponent";
import PieChartComponent from "../Charts/PieChartComponent";
import Insights from "../Insights";

const Dashboard = ({ transactions }) => {

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="dashboard-container container mt-4 fade-in">

      {/* Cards */}
      <div className="row g-4">
        <div className="col-md-4">
          <SummaryCard title="Balance" amount={balance} />
        </div>

        <div className="col-md-4">
          <SummaryCard title="Income" amount={totalIncome} type="income" />
        </div>

        <div className="col-md-4">
          <SummaryCard title="Expenses" amount={totalExpense} type="expense" />
        </div>
      </div>

      {/* Charts */}
      <div className="row mt-5 g-4">
        <div className="col-md-6">
          <LineChartComponent transactions={transactions} />
        </div>

        <div className="col-md-6">
          <PieChartComponent transactions={transactions} />
        </div>
      </div>

      {/* Insights */}
      <Insights transactions={transactions} />

      {/* Empty state */}
      {transactions.length === 0 && (
        <p className="text-center mt-5 text-secondary">
          No data available. Add transactions 🚀
        </p>
      )}

    </div>
  );
};

export default Dashboard;