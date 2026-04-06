import React, { useState } from "react";

const Transactions = ({ role, transactions, setTransactions }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // ✅ Form State
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  // ✅ Add Transaction
  const handleAdd = () => {
    if (!form.date || !form.category || !form.amount) {
      alert("Fill all fields");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    setTransactions([newTransaction, ...transactions]);

    setForm({
      date: "",
      category: "",
      amount: "",
      type: "expense",
    });
  };

  // ✅ Delete
  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // ✅ Filter
  const filteredData = transactions.filter((t) => {
    return (
      (filter === "all" || t.type === filter) &&
      t.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="container mt-4">

      {/* ➕ ADD FORM */}
      {role === "admin" && (
        <div className="card p-3 mb-4" style={{ backgroundColor: "#1e293b" }}>
          <h5 className="text-light mb-3">Add Transaction</h5>

          <div className="row g-3">
            <div className="col-md-3">
              <input
                type="date"
                className="form-control"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>

            <div className="col-md-3">
              <input
                type="text"
                placeholder="Category"
                className="form-control"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
            </div>

            <div className="col-md-2">
              <input
                type="number"
                placeholder="Amount"
                className="form-control"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
              />
            </div>

            <div className="col-md-2">
              <select
                className="form-select"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            <div className="col-md-2">
              <button className="btn btn-primary w-100" onClick={handleAdd}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔍 Search + Filter */}
      <div className="d-flex gap-3 mb-3">
        <input
          type="text"
          placeholder="Search category..."
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-select"
          style={{ maxWidth: "150px" }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* 📋 Table */}
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
              {role === "admin" && <th>Action</th>}
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.category}</td>
                  <td>₹ {t.amount}</td>
                  <td>
                    <span
                      className={`badge ${
                        t.type === "income" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {t.type}
                    </span>
                  </td>

                  {role === "admin" && (
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(t.id)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No transactions
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Transactions;