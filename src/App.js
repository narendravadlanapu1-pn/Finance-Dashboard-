import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Pages";
import Transactions from "./components/Transactions";

function App() {
  const [role, setRole] = useState("viewer");

  // 🌙 Theme state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // 💾 Save theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme; // apply to body
  }, [theme]);

  // 💾 Transactions (same as before)
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <Router>
      <Navbar
        role={role}
        setRole={setRole}
        theme={theme}
        setTheme={setTheme}
      />

      <Routes>
        <Route path="/" element={<Dashboard transactions={transactions} />} />
        <Route
          path="/transactions"
          element={
            <Transactions
              role={role}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;