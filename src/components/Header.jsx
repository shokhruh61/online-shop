import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/products/:id", label: "Products" },
  { path: "/contact", label: "Contact Us" },
];

function Header() {
  const { allProducts = 0, price = 0 } = useSelector((state) => state.products);

  return (
    <header className="bg-base-100 shadow-md">
      <div className="navbar max-w-[1600px] mx-auto">
        {/* Left side */}
        <div className="flex-1 navbar-start">
          {/* Mobile menu */}
          <div className="dropdown block md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <FaBars className="h-5 w-5" />
            </div>
            <nav>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems.map(({ path, label }) => (
                  <li key={path}>
                    <Link to={path} className="link link-hover">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Logo */}
          <Link to="/" className="btn btn-secondary text-xl normal-case">
            MyCard
          </Link>
        </div>

        {/* Center (Desktop menu) */}
        <div className="navbar-center hidden md:flex">
          <ul className="flex items-center gap-7">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link to={path} className="link link-hover">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-end flex-none gap-3">
          {/* Cart */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {allProducts}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow z-[1]"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{allProducts} Items</span>
                <span className="text-info">Subtotal: ${price}</span>
                <div className="card-actions">
                  <Link to="/card" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
