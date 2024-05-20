import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./navbar.css";

interface Size {
  width: number;
  height: number;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Cập nhật kích thước ban đầu

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__content">
        <nav
          className={`header__content__nav ${
            menuOpen && size.width < 768 ? "isMenu" : ""
          }`}
        >
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav__active" : "")}
              >
                TRANG CHỦ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "nav__active" : "")}
              >
                BÀI VIẾT
              </NavLink>
            </li>
            <li className="header__content__logo">
              <Link to="/">
                <img src="/assets/logo.svg" />
              </Link>
            </li>
            <li>
              <NavLink
                to="/works"
                className={({ isActive }) => (isActive ? "nav__active" : "")}
              >
                TÀI LIỆU
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                className={({ isActive }) => (isActive ? "nav__active" : "")}
              >
                TUYỂN DỤNG
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/" className="header__content__toggle">
          <img src="/assets/logo.svg" />
        </Link>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
