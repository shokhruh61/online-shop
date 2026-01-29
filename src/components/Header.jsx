import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const navItems = [
  { path: "/", label: "Bosh sahifa" },
  { path: "/products/:id", label: "Mahsulotlar" },
  { path: "/contact", label: "Bog‘lanish" },
];

function Header() {
  const { allProducts = 0, price = 0 } = useSelector((state) => state.products);

  return (
    <header className="bg-base-100 shadow-sm border-b border-base-200">
      <div className="bg-primary text-primary-content text-sm">
        <div className="max-w-[1600px] mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <p>Bezatli yetkazib berish va 24/7 qo‘llab-quvvatlash</p>
          <div className="flex items-center gap-4">
            <span>+998 (90) 123-45-67</span>
            <span>info@shumarket.uz</span>
          </div>
        </div>
      </div>
      <div className="navbar max-w-[1600px] mx-auto px-4">
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
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="h-10 w-10 rounded-2xl bg-primary/10 text-primary grid place-items-center">
              SM
            </span>
            Shu Market
          </Link>
        </div>

        {/* Center (Desktop menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-7 font-medium">
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
          <div className="hidden md:flex items-center gap-2">
            <label className="input input-bordered flex items-center gap-2 w-64">
              <input
                type="text"
                className="grow"
                placeholder="Mahsulot qidirish"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.6-5.15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                />
              </svg>
            </label>
            <button className="btn btn-primary btn-sm">Aksiya</button>
          </div>
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
