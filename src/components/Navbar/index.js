import React from "react";
import { Link, useLocation } from "react-router-dom";
import './index.css'

const Navbar = ({ role, setRole }) => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg px-4" style={{ backgroundColor: "#1e293b" }}>
      
      <Link className="navbar-brand text-info fw-bold" to="/">
        <img src="https://res.cloudinary.com/dqcwvoqyh/image/upload/v1775454177/360_F_1220107016_r2QhTZ598dxyw1r0BlqTyFmDCLTz6sMb_r47ez9.jpg" alt="logo" className="logo1"/> FinTrack
      </Link>

      <div className="ms-4">
        <Link
          to="/"
          className={`me-3 text-decoration-none ${
            location.pathname === "/" ? "text-info" : "text-light"
          }`}
        >
          Dashboard
        </Link>

        <Link
          to="/transactions"
          className={`text-decoration-none ${
            location.pathname === "/transactions" ? "text-info" : "text-light"
          }`}
        >
          Transactions
        </Link>
      </div>

      <div className="ms-auto d-flex align-items-center">
        <span className="me-2 text-light">Role:</span>

        <select
          className="form-select form-select-sm"
          style={{ width: "120px" }}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

    </nav>
  );
};

export default Navbar;